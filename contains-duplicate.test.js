// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums array of numbers
 * @returns {boolean} true if duplicates exists, otherwise false
 */

const containsDuplicate = (nums) => new Set(nums).size !== nums.length;

describe('Checks if arrays contain duplicates', () => {
  it('Should return true if array contains duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });
  it("Should return false if array doesn't contain duplicates", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  });
});
