// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let i = 0;
  let prefix = '';
  checkIndex = (words, i) => {
    let current = [];
    for (const word of words) {
      current.push(word[i]);
    }
    if (new Set([...current]).size === 1 && current[0]) {
      prefix += current[0];
      return true;
    } else return false;
  };

  while (checkIndex(strs, i)) i++;

  return prefix;
};

it('Should return the longest common prefix among a list of strings', () => {
  expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  expect(longestCommonPrefix(['', 'fff', 'fff'])).toBe('');
  expect(longestCommonPrefix([''])).toBe('');
  expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  expect(longestCommonPrefix(['fff', 'ffff', 'fffff'])).toBe('fff');
  expect(longestCommonPrefix(['fff', 'fff', 'fff'])).toBe('fff');
});
