// leet - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let current = 0;
  for (let next = 1; next < nums.length; next++) {
    if (nums[current] !== nums[next]) {
      nums[++current] = nums[next];
    }
  }
  return current + 1;
};
