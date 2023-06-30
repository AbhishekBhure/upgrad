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
