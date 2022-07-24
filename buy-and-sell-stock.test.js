// input array of integers representing stocks value on given days
// output - number representing maximum possible profit assuming
// any amount of transactions allowed

const maxProfit = (arr) => {
  let profit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      profit += arr[i + 1] - arr[i];
    }
  }
  return profit;
};

it('Should calculate maximum profit possible for sotck value array', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(7);
  expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
