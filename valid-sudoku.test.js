// leet - https://leetcode.com/submissions/detail/766828909/?from=explore&item_id=769

// Input - string representing sudoku board
// Output - return boolean stating if the board is valid

/**
 * @param {Array<string[]>} board - string representing sudoku board
 * @returns {boolean} boolean - is board valid
 */

const isValidSudoku = (board) => {
  // scan each section - row, column, box, add every element to seen, if exists, return false

  const checkSection = (fromi, fromj, size, isBox) => {
    const globalSeen = new Set();
    for (let i = fromi; i < fromi + size; i++) {
      const seen = new Set();
      for (let j = fromj; j < fromj + size; j++) {
        // scans horizontally
        const current = board[i][j];
        if (seen.has(current)) return false;
        else {
          if (globalSeen.has(current) && isBox) return false;
          if (!isNaN(current)) {
            seen.add(current);
            isBox && globalSeen.add(current);
          }
        }
      }
    }
    if (!isBox) {
      for (let i = fromi; i < fromi + size; i++) {
        const seen = new Set();
        for (let j = fromj; j < fromj + size; j++) {
          // scans vertically
          const current = board[j][i];
          if (seen.has(current)) return false;
          else {
            if (globalSeen.has(current) && isBox) return false;
            if (!isNaN(current)) {
              seen.add(current);
              isBox && globalSeen.add(current);
            }
          }
        }
      }
    }
    return true;
  };

  if (checkSection(0, 0, 9, false) === false) return false;

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      boxCheck = checkSection(i, j, 3, true);
      if (boxCheck === false) return false;
    }
  }

  return true;
};

const board1 = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
const board2 = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];
const board3 = [
  ['.', '.', '.', '.', '5', '.', '.', '1', '.'],
  ['.', '4', '.', '3', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '3', '.', '.', '1'],
  ['8', '.', '.', '.', '.', '.', '.', '2', '.'],
  ['.', '.', '2', '.', '7', '.', '.', '.', '.'],
  ['.', '1', '5', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
  ['.', '2', '.', '9', '.', '.', '.', '.', '.'],
  ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
];

isValidSudoku(board1);
isValidSudoku(board2);
isValidSudoku(board3);

it('Should return boolean stating the sudoku board validity', () => {
  expect(isValidSudoku(board1)).toBeTruthy();
  expect(isValidSudoku(board2)).toBeFalsy();
  expect(isValidSudoku(board3)).toBeFalsy();
});
