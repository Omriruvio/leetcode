// leet: //leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/

/**
 * @param {number[]} nums non empty array containing members that appear twice except one that appears only once
 * @return {number} the member of the array that appears only once
 */

const singleNumber = function (nums) {
  for (const x of nums) {
    if (nums.indexOf(x) === nums.lastIndexOf(x)) return x;
  }
};

describe('It finds the member that appears only once in an array of doubles', () => {
  it('Should find the single number', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    expect(singleNumber([1])).toBe(1);
  });
});
