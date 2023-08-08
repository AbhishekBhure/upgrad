let userCommand = "What is the weather like today?";
let findCommand =
  userCommand.split(" ").findIndex((e) => e === "weather") !== -1;
// console.log(findCommand);

let greeting = "Hello";
// greeting.push(" there!");
// console.log(greeting);

let colors = "I love Red".split(" ");
colors.push("and Green!");
// console.log(typeof colors.join(" "));

let wordArray = ["Lord", "of", "the", "Rings"];
let revArray = wordArray.reverse();
// console.log(revArray[2]);

let str = "The quick brown fox never went anywhere...";
// console.log(str.substring(str.search("fox"), str.search("fox") + 3));

let fruits = ["Apples", "Kiwi", "Strawberries"];
let veggies = ["Potato", "Bell Peppers", "Broccoli"];
let kitchenBasket = [fruits, ...veggies];

console.log(kitchenBasket);
