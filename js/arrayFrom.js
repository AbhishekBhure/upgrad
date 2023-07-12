const iLoveIceCream = (flavour) =>
  Array.from(flavour, (ele) => `I like ${ele} ice cream`);

const randomNums = (count) =>
  Array.from(new Array(count), (ele) => parseInt(Math.random() * 10000));

const genStars = (count) => Array.from(Array(count), () => "*");

for (let i = 1; i <= 6; i++) {
  console.log(genStars(i));
}

for (let i = 6; i >= 1; i--) {
  console.log(genStars(i));
}
console.log(randomNums(10));
// console.log(iLoveIceCream(["Mango", "Banana", "Chocolate"]));
