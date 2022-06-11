// Challenge - https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    const needed = target - nums[i];
    if (seen.has(needed)) return [nums.indexOf(needed), i];
    seen.add(nums[i]);
  }
  return false;
};
