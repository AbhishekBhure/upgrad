const bug = document.querySelector('.ladybird');
const upBtn = document.querySelector('#up');
const downBtn = document.querySelector('#down');
const rightBtn = document.querySelector('#right');
const leftBtn = document.querySelector('#left');
const homeBtn = document.querySelector('#home');
const turnClockwiseBtn = document.querySelector('#turnClockWise');
const turnAntiClockwiseBtn = document.querySelector('#turnAntiClockWise');

let rotation = 0;
let xPos = 0;
let yPos = 0;

const turnClockwise = () => {
  rotation += 90;
  bug.style.transform = `rotate(${rotation}deg)`;
};

const turnAntiClockwise = () => {
  rotation -= 90;
  bug.style.transform = `rotate(${rotation}deg)`;
};

const setTransform = () => {
  bug.style.left = `${xPos}px`;
  bug.style.top = `${yPos}px`;
};

const stepLeft = () => {
  xPos > 0 && (xPos -= 10);
  setTransform();
};

const stepRight = () => {
  xPos < 450 && (xPos += 10);
  setTransform();
};

const stepUp = () => {
  yPos > 0 && (yPos -= 10);
  setTransform();
};

const stepDown = () => {
  yPos < 450 && (yPos += 10);
  setTransform();
};

const home = () => {
  yPos = 0;
  xPos = 0;
  setTransform();
};

upBtn.addEventListener('click', stepUp);
downBtn.addEventListener('click', stepDown);
rightBtn.addEventListener('click', stepRight);
leftBtn.addEventListener('click', stepLeft);
homeBtn.addEventListener('click', home);
turnClockwiseBtn.addEventListener('click', turnClockwise);
turnAntiClockwiseBtn.addEventListener('click', turnAntiClockwise);

// Keyboard events
document.addEventListener('keydown', function (event) {
  const { key } = event;

  switch (key) {
    case 'ArrowUp':
      stepUp();
      break;
    case 'ArrowDown':
      stepDown();
      break;
    case 'ArrowLeft':
      stepLeft();
      break;
    case 'ArrowRight':
      stepRight();
      break;
    case ']':
      turnClockwise();
      break;
    case '[':
      turnAntiClockwise();
      break;
    case 'H':
    case 'h':
      home();
      break;
  }
});
