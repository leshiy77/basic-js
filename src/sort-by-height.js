const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = [];
  let numArr = arr.filter(elem => elem > 0).sort((a, b) => b - a);
  arr.forEach((elem, index)=>{
    if(elem < 0) {
      newArr[index] = elem;
    }
  })
  for (let i = 0; i<newArr.length; i++) {
    if (newArr[i] == undefined) {
      newArr[i] = numArr.pop();
    }
  }
  while (numArr.length) {
    newArr.push(numArr.pop());
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
