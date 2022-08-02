const firstUniqChar = (s) => {
  const hash = {};
  for (const char of s) {
    hash[char] = hash[char] ? ++hash[char] : 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }
  return -1;
};

describe('Finds the first unique character in a string', () => {
  it('Should return the first unique character index', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2);
    expect(firstUniqChar('leetcode')).toBe(0);
    expect(firstUniqChar('aabb')).toBe(-1);
  });
});
