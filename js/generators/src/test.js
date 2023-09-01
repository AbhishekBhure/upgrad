function* processNums(a, b) {
  yield a - b;
  yield a + b;
}

const nums = processNums(10, 20);
console.log(nums.next());
console.log(nums.next());
console.log(nums.next());
