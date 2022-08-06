// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/770/

// Input - n x n 2D matrix representing an image
// Ouput - matrix rotated 90deg clockwise

/**
 * Rotates a 2d matrix 90deg clockwise
 * @param {Array<number[]>} matrix
 * @returns {Array<number[]>} Rotated matrix
 */
const rotate = (matrix) => {
  return matrix[0].map((x, i) => {
    return matrix.map((row) => row[i]).reverse();
  });
};
const rotateCounter = (matrix) => {
  return matrix[0].map((x, i) => {
    return matrix.map((row) => row[row.length - 1 - i]);
  });
};

const matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

console.log(rotate(matrix1), [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
]);
console.log(rotate(matrix2), [
  [15, 13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7, 10, 11],
]);
