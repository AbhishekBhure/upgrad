function birthdayCakeCandles(candles) {
  // Write your code here

  let a = Math.max(...candles);
  let b = 0;
  for (let i = 0; i <= candles.length; i++) {
    if (candles[i] === a) {
      b++;
    }
  }
  return b;
}
console.log(birthdayCakeCandles([3, 2, 1, 3, 1, 3]));
