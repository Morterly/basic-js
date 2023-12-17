// const { NotImplementedError } = require('../extensions/index.js');

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
  let result = structuredClone(matrix);

  function count(x, y, matrix) {
    let count = 0;
    for (let a = x - 1; a <= x + 1; a++) {
      for (let b = y - 1; b <= y + 1; b++) {
        if (a >=0 && b >= 0 && a < matrix.length && b < matrix[a].length) {
              count += matrix[a][b] === true ? 1 : 0;
        }
      }
    }
    return matrix[x][y] ? --count : count;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      result[i][j] = count(i, j, matrix);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
