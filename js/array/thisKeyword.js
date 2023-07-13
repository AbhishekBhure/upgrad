const john = {
  age: 35,
  genger: "M",
  weight: 78,
  height: 177.8,
};
const sarah = {
  age: 35,
  genger: "F",
  weight: 65,
  height: 177.8,
};

const calcBmi = function () {
  return this.weight / (this.height / 100) ** 2;
};

const calcBmr = function () {
  if (this.genger === "M") {
    return 66.5 + 13.75 * this.weight + 5.003 * this.height - 6.755 * this.age;
  } else {
    return 655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age;
  }
};

//Call a func within the context of an object
console.log(`John's BMI : ${calcBmi.call(john)}`);
console.log(`Sarah's BMI : ${calcBmi.call(sarah)}`);

//bind
const calcBmiJohn = calcBmi.bind(john);
console.log(calcBmiJohn());

//this keyword with arrow func
const obj = {
  x: 12,
  y: 13,
  addZ() {
    return (z) => this.x + this.y + z; //a func that adds z to this.x and this.y
  },
};
let addZFn = obj.addZ();
console.log(addZFn(2));
