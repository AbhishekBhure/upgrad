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

// console.log(kitchenBasket);

// console.log(NaN === NaN);
// console.log(undefined === null);
// console.log(0 == false);
console.log(NaN == 0); //According to the IEEE 754 standard, any comparison involving NaN always returns false, even when comparing NaN to itself.

console.log(typeof 0); //numbner
console.log(typeof false); //boolean
console.log(typeof NaN); //number
console.log(typeof undefined); //undefine
console.log(typeof null); //object
