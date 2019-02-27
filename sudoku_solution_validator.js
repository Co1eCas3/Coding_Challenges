// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
// (More info at: http://en.wikipedia.org/wiki/Sudoku)

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

// Examples
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 5, 3, 4, 8],
//   [1, 9, 8, 3, 4, 2, 5, 6, 7],
//   [8, 5, 9, 7, 6, 1, 4, 2, 3],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 6, 1, 5, 3, 7, 2, 8, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 4, 5, 2, 8, 6, 1, 7, 9]
// ]); // => true
// validSolution([
//   [5, 3, 4, 6, 7, 8, 9, 1, 2],
//   [6, 7, 2, 1, 9, 0, 3, 4, 8],
//   [1, 0, 0, 3, 4, 2, 5, 6, 0],
//   [8, 5, 9, 7, 6, 1, 0, 2, 0],
//   [4, 2, 6, 8, 5, 3, 7, 9, 1],
//   [7, 1, 3, 9, 2, 4, 8, 5, 6],
//   [9, 0, 1, 5, 3, 7, 2, 1, 4],
//   [2, 8, 7, 4, 1, 9, 6, 3, 5],
//   [3, 0, 0, 4, 8, 1, 1, 7, 9]
// ]); // => false

function validSolution(board) {
  let rows = [],
    cols = [],
    blocks = [[], [], [], [], [], [], [], [], []];

  for (let row = 0; row < board.length; row++) {
    rows.push(board[row]);
    cols[row] = [];
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) return false;

      cols[row].push(board[col][row]);

      col < 3
        ? row < 3
          ? blocks[0].push(board[row][col])
          : row >= 3 && row < 6
          ? blocks[3].push(board[row][col])
          : blocks[6].push(board[row][col])
        : col >= 3 && col < 6
        ? row < 3
          ? blocks[1].push(board[row][col])
          : row >= 3 && row < 6
          ? blocks[4].push(board[row][col])
          : blocks[7].push(board[row][col])
        : row < 3
        ? blocks[2].push(board[row][col])
        : row >= 3 && row < 6
        ? blocks[5].push(board[row][col])
        : blocks[8].push(board[row][col]);
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let d = 1; d <= rows[i].length; d++) {
      if (rows[i].indexOf(d) === -1) return false;
      if (cols[i].indexOf(d) === -1) return false;
      if (blocks[i].indexOf(d) === -1) return false;
    }
  }

  return true;
}
