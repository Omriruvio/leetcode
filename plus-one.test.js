// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

const plusOne = (digits) => {
  if (digits.length === 0) return [1];
  const last = digits.length - 1;
  if (digits[last] === 9) {
    digits[last] = 0;
    digits = plusOne(digits.slice(0, last)).concat(digits[last]);
  } else {
    digits[last] += 1;
  }
  return digits;
};

describe('Increments an array representing integer by one', () => {
  it('Should return an incremented array', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    expect(plusOne([4, 3, 2, 9])).toEqual([4, 3, 3, 0]);
    expect(plusOne([9])).toEqual([1, 0]);
  });
});
