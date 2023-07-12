const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

let n = arr.length;
let rightSum = 0;
let leftSum = 0;
for (let i = 0; i < n; i++) {
  rightSum += arr[i][i];
  leftSum += arr[i][n - 1 - i];
}

console.log(Math.abs(rightSum - leftSum));
