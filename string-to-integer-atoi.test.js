// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
// Input - string
// Ouput - number contained in the string

/**
 * @param {string} s string containing a number
 * @returns {number} number parsed from string input
 */
const myAtoi = (s) => {
  const result = parseInt(s.match(/(^ *)(\+|\-)?\d+/)) || 0;
  if (result < -2147483648) return -2147483648;
  if (result > 2147483648) return 2147483648;
  return result;
};

it('Should return a number parsed from the given string', () => {
  expect(myAtoi('42')).toEqual(42);
  expect(myAtoi('   -42')).toEqual(-42);
  expect(myAtoi('4193 with words')).toEqual(4193);
  expect(myAtoi('words and 987')).toEqual(0);
  expect(myAtoi('-91283472332')).toEqual(-2147483648);
});
