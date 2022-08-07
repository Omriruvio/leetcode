/**
 * Receives two strings, searches existence of 'needle' in 'hayastack'.
 * Returns 0 if 'needle' is an empty string
 * Returns -1 if 'needle' is not found in 'haystack'
 * Returns -1 if 'needle' is longer than 'haystack'
 * @param {string} haystack string to be searched
 * @param {string} needle to be searched inside haystack
 * @returns {number} index | 0 | -1
 */

const strStr = (haystack, needle) => {
  if (!needle) return 0;
  if (needle.length > haystack.length) return -1;
  let result = -1;
  for (let j = 0; j < haystack.length; j++) {
    let i = 0;
    if (haystack[j] === needle[i]) {
      let k = j;
      while (haystack[k] === needle[i] && i < needle.length) {
        if (i === needle.length - 1) {
          result = j;
          break;
        }
        i++;
        k++;
      }
    }
    if (result !== -1) break;
  }
  return result;
};

it('Checks if string in param 2 exists in param 1', () => {
  expect(strStr('hello', 'll')).toBe(2);
  expect(strStr('aaaaa', 'bba')).toBe(-1);
  expect(strStr('aaaaa', '')).toBe(0);
  expect(strStr('aaaaa', 'a')).toBe(0);
  expect(strStr('mississippi', 'mississippi')).toBe(0);
});
