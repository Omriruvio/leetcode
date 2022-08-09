// leet - https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/

class MinStack {
  constructor() {
    this.minValues = [];
    this.stack = [];
  }

  push = (value) => {
    this.stack.push(value);
    const current = !isNaN(this.minValues?.at(-1)) ? this.minValues?.at(-1) : Infinity;
    if (value <= current) {
      this.minValues.push(value);
    }
  };

  pop = () => {
    const removed = this.stack.pop();
    if (removed === this.minValues.at(-1)) {
      this.minValues.pop();
    }
  };

  getMin = () => {
    return +this.minValues.at(-1);
  };

  top = () => +this.stack.at(-1);
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin(), -3); // return -3
minStack.pop();
console.log(minStack.top(), 0); // return 0
console.log(minStack.getMin(), -2); // return -2

const minStack2 = new MinStack();
minStack2.push(0);
minStack2.push(1);
minStack2.push(0);
console.log(minStack2.getMin(), 0);
minStack2.pop();
console.log(minStack2.getMin(), 0);
