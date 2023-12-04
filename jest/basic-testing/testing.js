function expect(actual) {
  return {
    tobe(expexted) {
      if (actual !== expexted) {
        throw new Error(`${actual} is not equal to ${expexted}`);
      }
    },
  };
}

expect(add(4, 3, 3)).tobe(10);

function add(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
}
