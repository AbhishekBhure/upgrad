const str = "Name: Abhi, Age: 22, Profession: Full Stack";
const age = str.slice(str.search("Age"), str.search("Age") + 7);
const age2 = str.substring(str.search("Age") - 2, 0);

console.log(age);
console.log(age2);

const message = "my regsiter number is RKQ23345-22. please update";
const pattern = message.search(/RKQ\d+\-\d+/g);
const regNum = message.slice(pattern, pattern + 12);
// console.log(`Reg Num: ${regNum} `);

const str1 = "name:James Dean,age:45,profession:Actor,location:Hollywood";

const fullName = str1.substring(
  str1.search("name") + 5,
  str1.search("age") - 1
);

const profession = str1.substring(
  str1.search("profession") + 11,
  str1.search("location") - 1
);

const hollywood = str1.substring(str1.search("location") + 9, str1.length);

console.log(`${fullName} was an ${profession} in a ${hollywood} movie`);
