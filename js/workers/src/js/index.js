const lightTheme = document.querySelector("#light");
const darkTheme = document.querySelector("#dark");
const inputContent = document.querySelector(".input-data .content");
const outputContent = document.querySelector(".output-data .content");
const startBtn = document.querySelector("#start");
// Theme management
lightTheme.addEventListener("click", () => {
  document.body.classList = "light-body";
});

darkTheme.addEventListener("click", () => {
  document.body.classList = "dark-body";
});

const inputData = [56e7, 76e8, 62e7, 12e8];

const computeWorker = new Worker("worker.js");

startBtn.addEventListener("click", () => {
  outputContent.innerHTML = "";
  startBtn.setAttribute("disabled", true);
  computeWorker.postMessage(inputData);
});

computeWorker.addEventListener("message", function ({ data }) {
  if (data.type === "data") {
    let { res, time } = data.message;
    outputContent.innerHTML += `<h4>${res} (${time}ms)</h4>`;
  }

  if (data.type === "exit") {
    startBtn.removeAttribute("disabled");
  }
});
