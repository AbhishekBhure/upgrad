const computeTotal = (x) =>
  new Promise((resolve) => {
    let sum = 0;
    for (let n = 0; n <= x; n++) {
      sum += n;
    }

    resolve(sum);
  });

const eachnum = async function* (arr) {
  let n = 0;
  while (n < arr.length) {
    let res = await computeTotal(arr[n]);
    yield res;
    n++;
  }
};

self.addEventListener("message", async function (evt) {
  let startTime = Date.now();
  for await (let res of eachnum(evt.data)) {
    self.postMessage({
      type: "data",
      message: {
        res,
        time: Date.now() - startTime,
      },
    });

    startTime = Date.now();
  }

  self.postMessage({ type: "exit" });
});
