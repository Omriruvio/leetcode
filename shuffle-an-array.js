// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/670/

class Solution {
  constructor(arr) {
    this.arr = arr;
  }
  reset = () => this.arr;
  shuffle = () => {
    const arr = [...this.arr];
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (arr.length - i));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
}

const shuffler = new Solution([1, 2, 3]);
console.log(shuffler.shuffle());
console.log(shuffler.shuffle());
console.log(shuffler.shuffle());
console.log(shuffler.shuffle());
console.log(shuffler.reset());
