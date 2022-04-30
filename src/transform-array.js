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
  let discardNext =  false;
  
  /* for (let i = 0; i<arr.length; i++) {
    if (arr[i] === '--discard-next' || arr[i] === '--double-prev'|| arr[i] === '--double-next' || arr[i] === '--discard-prev' ) {
      switch(arr[i]) {
        case '--discard-next':
          if (i < arr.length -1) {
            i +=1;
            discardNext = true;
            break
          } else {
            break
          }
        case '--double-prev':
          if (discardNext) {
            discardNext = false;
            break
          } else if (i = 0) {
            break
          } else {
            newArr.push(arr[i-1]);
          break
          }
        case '--double-next':
          if (i < arr.length -1) {
            newArr.push(arr[i+1]);
            break
          } else {
            break
          }
        case '--discard-prev':
          if (discardNext) {
            discardNext = false;
            break
          } else if (i = 0) {
            break
          } else {
            newArr.pop();
            break
          }
      } 
    } else {
      newArr.push(arr[i]);
    }
  }*/
  return newArr;
}

module.exports = {
  transform
};
