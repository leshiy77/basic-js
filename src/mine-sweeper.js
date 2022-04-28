const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];
  for (let x = 0; x < matrix.length; x++) {
    const row = []
    for (let y = 0; y < matrix[x].length; y++) {
      let tile = 0;
      row.push(tile);
    }
    result.push(row);
  }
  for (let x = 0; x < result.length; x++) {
    for (let y = 0; y < result[x].length; y++) {
      if (matrix[x][y]) {
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx == 0 && dy == 0) {
              continue
            }
            let cell = getTail(x + dx, y + dy);
            if (cell) {
              result[x + dx][y + dy] += 1
            }
          }
        }
      }
    }
  }
  return result;
}
function getTail (x, y) {
  if (x === -1 || y === -1 || x > 2 || y > 2) {
    return false;
  }
  return true;
}

module.exports = {
  minesweeper
};
