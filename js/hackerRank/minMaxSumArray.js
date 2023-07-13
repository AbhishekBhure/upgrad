function miniMaxSum(arr) {
  // Write your code here
  let sums = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = arr
      .slice(0, i)
      .concat(arr.slice(i + 1))
      .reduce((a, b) => a + b);
    sums.push(sum);
  }
  let a = Math.max(...sums);
  let b = Math.min(...sums);
  console.log(b, a);
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));
