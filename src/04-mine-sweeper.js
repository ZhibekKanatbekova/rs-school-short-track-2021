// jshint esversion:6
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
  const newArr = matrix.map((it) => it.map((item) => {
    if (item === true) {
      return 1;
    }
    return 2;
  }));
  const a = newArr.slice(0, 2).reverse();
  const b = newArr.slice(2, newArr.length);

  return [...a, ...b];
}

module.exports = minesweeper;
