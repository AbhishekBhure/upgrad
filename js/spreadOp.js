const Task = function (title) {
  this.title = title ?? "My Tasks";
  this.taskList = [];
  this.showTask = function () {
    console.log(`---${this.title}---`);
    this.taskList.forEach((item, index) =>
      console.log(`${index + 1}. ${item}`)
    );
  };

  this.add = function (item) {
    this.taskList = [item, ...this.taskList];
  };
};

const myTasks = new Task("Daily Work");
myTasks.add("Complete Work\n");
myTasks.add("go to gym @7pm");
myTasks.showTask();

const shopping = new Task("Shopping");
shopping.add("Buy new iphone\n");
shopping.showTask();

const greaterNum = [
  [1, 2],
  [3, 4],
  [6, 5],
];

const isGreater = (a, b) =>
  a > b ? `${a} is grater than ${b}` : `${b} is greater than ${a}`;

greaterNum.forEach((ele) => console.log(isGreater(...ele)));

const scoreCards = [
  {
    id: 1,
    student: "Joe M",
    scores: [54, 76, 65],
  },
  {
    id: 2,
    student: "Jane K",
    scores: [68, 85, 74],
  },
  {
    id: 3,
    student: "Chris P",
    scores: [55, 88, 80],
  },
];

const calculatePercentile = function (eng, compSc, maths) {
  return (((eng + compSc + maths) / 300) * 100).toPrecision(4);
};

for (let x of scoreCards) {
  let scoreArray = x.scores;
  console.log(`${x.student} has scored ${calculatePercentile(...scoreArray)}%`);
}
