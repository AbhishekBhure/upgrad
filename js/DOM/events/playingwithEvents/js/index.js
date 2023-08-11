const bug = document.querySelector(".ladybird");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const rightBtn = document.querySelector("#right");
const leftBtn = document.querySelector("#left");
const homeBtn = document.querySelector("#home");
const turnClockWiseBtn = document.querySelector("#turnClockWise");
const turnAntiClockWiseBtn = document.querySelector("#turnAntiClockWise");

let rotation = 0;
let xPos = 0;
let yPos = 0;

const turnClockWise = () => {
  rotation += 90;
  bug.style.transform = `rotate(${rotation}deg)`;
};

const turnAntiClockWise = () => {
  rotation -= 90;
  bug.style.transform = `rotate(${rotation}deg)`;
};

const setTransform = () => {
  bug.style.left = `${xPos}px`;
  bug.style.top = `${yPos}px`;
  bug.style.transform = `rotate(${rotation}deg)`;
};

const stepLeft = () => {
  xPos > 0 && (xPos += -10);
  setTransform();
};
const stepRight = () => {
  xPos < 450 && (xPos += 10);
  setTransform();
};

const stepUp = () => {
  yPos > 0 && (yPos += -10);
  setTransform();
};
const stepDown = () => {
  yPos < 450 && (yPos += 10);
  setTransform();
};

const home = () => {
  xPos = 0;
  yPos = 0;
  rotation = 0;
  setTransform();
};

upBtn.addEventListener("click", stepUp);
downBtn.addEventListener("click", stepDown);
rightBtn.addEventListener("click", stepRight);
leftBtn.addEventListener("click", stepLeft);
turnClockWiseBtn.addEventListener("click", turnClockWise);
turnAntiClockWiseBtn.addEventListener("click", turnAntiClockWise);
homeBtn.addEventListener("click", home);

const keyBoardKeys = {
  ArrowUp: stepUp,
  ArrowDown: stepDown,
  ArrowRight: stepRight,
  ArrowLeft: stepLeft,
  "]": turnClockWise,
  "[": turnAntiClockWise,
  H: home,
  h: home,
};

document.addEventListener("keydown", function (event) {
  const { key } = event;
  keyBoardKeys[key]();
});

// document.addEventListener("keydown", function (event) {
//   const { key } = event;
//   switch (key) {
//     case "ArrowUp":
//       stepUp();
//       break;
//     case "ArrowDown":
//       stepDown();
//       break;
//     case "ArrowRight":
//       stepRight();
//       break;
//     case "ArrowLeft":
//       stepLeft();
//       break;
//     case "]":
//       turnClockWise();
//       break;
//     case "[":
//       turnAntiClockWise();
//       break;
//     case "H":
//     case "h":
//       home();
//       break;
//   }
// });
