let count = 0;
let loopMe = setInterval(function () {
  console.log(`Count: ${count}`);
  count++;
}, 1000);

setTimeout(function () {
  clearInterval(loopMe);
  count = 0;
}, 10000);
