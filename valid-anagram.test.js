// leet: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/

const isAnagram = (s, t) => {
  // can be improved with hashmap
  return s.split('').sort().join('') === t.split('').sort().join('');
};

describe('It vlidates two strings as anagrams', () => {
  it('Should return true if anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBeTruthy();
    expect(isAnagram('hello', 'ollhe')).toBeTruthy();
  });
  it('Should return false if not anagram', () => {
    expect(isAnagram('ana2ram', 'nagaram')).toBeFalsy();
    expect(isAnagram('he5lo', 'ollhe')).toBeFalsy();
  });
});
