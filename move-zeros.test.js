// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

const moveZeroes = (nums) => {
  const length = nums.length;
  let i = 0;
  let j = 0;
  while (j < length) {
    if (nums[j] === 0) j++;
    else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j++;
    }
  }
  return nums;
};

describe('Moves all zeroes in a number array to the end', () => {
  it('Should return an array with all 0s at the end.', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes([0])).toEqual([0]);
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });
});
