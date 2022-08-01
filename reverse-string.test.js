// leet: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
/**
 * @param {string[]} s
 */
const reverseString = (s) => {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    [s[i], s[j]] = [s[j], s[i]];
    i++;
    j--;
  }
  return s;
};

describe('Reverses a string array in place', () => {
  it('Should reverse the string array', () => {
    expect(reverseString(['h', 'e', 'l', 'l', 'o'])).toEqual(['o', 'l', 'l', 'e', 'h']);
    expect(reverseString(['H', 'a', 'n', 'n', 'a', 'h'])).toEqual(['h', 'a', 'n', 'n', 'a', 'H']);
  });
});
