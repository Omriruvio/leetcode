// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {Array<number>} nums array of numbers
 * @param {number} k amount of steps to rotate the array to the right
 * @returns {Array<number>} Returns array rotated 'k' times to the right
 */

const rotate = (nums, k) => {
  return nums.concat(nums).slice(-(nums.length + k), nums.length * 2 - k);
};

describe('Rotating an array', () => {
  it('Should rotate the array k times to the right', () => {
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 1)).toEqual([7, 1, 2, 3, 4, 5, 6]);
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([6, 7, 1, 2, 3, 4, 5]);
    expect(rotate([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});
