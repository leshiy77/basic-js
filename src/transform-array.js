const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let newArr = [];
  arr.forEach((elem, index, array) => {
    if (elem in Object.keys(controls)) {
      console.log(elem)
    } else {
      newArr.push(elem)
    }
  });
  return newArr;
}
function isIndex(index, array) {
  if( index < 0 || index > array.length - 1){
    return false;
  }
  return true;
}
const controls = {
  "--discard-next": function(index, array) {
      console.log(index);
  },
  "--discard-prev":  function(index, array) {
    console.log(index);
  },
  "--double-next": function(index, array) {
    console.log(index);
  },
  "--double-prev":  function(index, array) {
    console.log(index);
  },
}

module.exports = {
  transform
};
