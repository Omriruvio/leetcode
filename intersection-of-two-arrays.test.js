// leet: https://leetcode.com/submissions/detail/758900001/?from=explore&item_id=674

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]} array containing elements that exist in both arrays
 */
const intersect = (nums1, nums2) => {
  const cache = {};
  const result = [];
  for (const num of nums1) {
    if (cache[num]) {
      cache[num]++;
    } else cache[num] = 1;
  }
  for (const num of nums2) {
    if (cache[num] > 0) {
      result.push(num);
      cache[num] -= 1;
    }
  }
  return result;
};

describe('Returns an array of elements that exist in both arrays', () => {
  it('Should return correct values:', () => {
    expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2]);
    expect(intersect([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
    expect(intersect([3, 1, 2], [1, 1])).toEqual([1]);
  });
});
