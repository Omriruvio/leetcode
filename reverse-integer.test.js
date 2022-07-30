// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/

const reverse = (x) => {
  let isNegative;
  let result = x;
  if (x < 0) {
    isNegative = true;
    result = Math.abs(x);
  }
  result = +String(result).split('').reverse().join('');
  return result > 0x7fffffff ? 0 : isNegative ? -1 * result : result;
};

describe('Rotates a signed 32-bit integer', () => {
  it('Should reverse positive numbers', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(120)).toBe(21);
  });
  it('Should reverse negative numbers', () => {
    expect(reverse(-123)).toBe(-321);
  });
});
