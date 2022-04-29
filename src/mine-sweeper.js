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
    let resMatrix = matrix.concat([]).map(row => row.map(cell => cell = 0));

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j]) {
          for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
              if (i + x >= 0 
                && i + x <= matrix[i].length
                && j + y >= 0 
                && j + y <= matrix.length) resMatrix[i + x][j + y]++;
            }
          }
          resMatrix[i][j]--;
        }
      }
    }
    return resMatrix
}

module.exports = {
  minesweeper
};
