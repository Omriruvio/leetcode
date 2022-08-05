const isPalindrome = (str) => {
  const normalized = str.replace(/(\W|_)/g, '').toLowerCase();
  return normalized === normalized.split('').reverse().join('');
};

describe('Checks if a valid palindrome', () => {
  it('Returns true or false for valid/invalid palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
    expect(isPalindrome('race a car')).toBeFalsy();
    expect(isPalindrome('race car')).toBeTruthy();
    expect(isPalindrome('ab_a')).toBeTruthy();
  });
});
