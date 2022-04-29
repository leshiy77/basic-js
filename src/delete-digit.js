const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let resultArray = [];
  for (let i = 0; i<String(n).length; i++) {
    let strN = String(n).split('');
    strN.splice(i, 1);
    resultArray.push(strN.join(''));
  }
  return Math.max.apply(null, resultArray);
}

module.exports = {
  deleteDigit
};
