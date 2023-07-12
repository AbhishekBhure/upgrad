// const isPlaindrome = (word) => {
//   let wordArr = [];
//   let newArr = [];

//   for (const w of word) {
//     wordArr.push(w);
//     newArr.push(w);
//   }
//   return wordArr.toString() === newArr.reverse().toString();
// };

//one liner by using split and join methdos
const isPlaindrome = (word) => word.split("").reverse().join("") === word;

console.log(isPlaindrome("civic") ? `is palindrome` : "not");

const str = "House No. 98, Philip Street, Mangrove Drive, Timberville -800123";

console.log(str.split(", "));

const greet = ["Hello!", "How are you?", "It is so nice to meet you again!"];

console.log(greet.join(", "));
