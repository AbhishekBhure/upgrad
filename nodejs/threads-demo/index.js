const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
  const worker = new Worker(__filename);

  worker.on("message", (message) => {
    console.log(`Result of computstion: ${message}`);
    process.exit(0);
  });

  worker.postMessage("Starting computation...Pleasse Wait...!!");
} else {
  parentPort.on("message", (message) => {
    console.log(`Worker says: ${message}`);
    let result = 0;

    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }

    parentPort.postMessage(result);
  });
}
