// leet: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Input - number[] integers
// Ouput - [x, y] representing indices of elements that would add up to target

const twoSum = (nums, target) => {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (seen.has(needed)) {
      return [i, seen.get(needed)];
    } else seen.set(nums[i], i);
  }
  return [];
};

it('Should return an array of two indices of numbers that sum up to target', () => {
  expect(twoSum([2, 7, 11, 15], 9).sort()).toEqual([0, 1].sort());
  expect(twoSum([3, 2, 4], 6).sort()).toEqual([1, 2].sort());
  expect(twoSum([3, 3], 6).sort()).toEqual([0, 1].sort());
});
