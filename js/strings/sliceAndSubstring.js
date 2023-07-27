const str = "Name: Abhi, Age: 22, Profession: Full Stack";
const age = str.slice(str.search("Age"), str.search("Age") + 7);
const age2 = str.substring(str.search("Age"), 0);

// console.log(age);
// console.log(age2);

const message = "my regsiter number is RKQ23345-22. please update";
const pattern = message.search(/RKQ\d+\-\d+/g);
const regNum = message.slice(pattern, pattern + 12);
console.log(`Reg Num: ${regNum} `);
