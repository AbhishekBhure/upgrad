"use strict";

const Person = function (firstName, lastName, age, email) {
  this.firstName, this.lastName, this.age, this.email;
  (this.introduction = () => `${firstName} is ${age} years old`),
    (this.canDrive = () => (age >= 18 ? "Yes" : "No"));
};

const Joe = new Person("Joe", "Mason", 17, "joe@mail.com");
const Jane = new Person("Jane", "Mandenga", 28, "joe@mail.com");

console.log(Joe.introduction());
console.log(`Can the user drive? : ${Joe.canDrive()}`);

console.log(Jane.introduction());
console.log(`Can the user drive? : ${Jane.canDrive()}`);
