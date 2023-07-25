"use strict";
const user = {
  id: 1,
  name: "John Doe",
  age: 23,
  home: {
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: 10001,
  },
};

//seal
const deepSeal = (obj) => {
  Object.values(obj).forEach((ele) => typeof ele === "object" && deepSeal(ele));
  return !Object.isSealed(obj) && Object.seal(obj);
};
// deepSeal(user);
// user.age = 20;
// user.home.city = "Belgaum";
// user.home.phone = 9876543210;

//freeze
const deepFreeze = (obj) => {
  Object.values(obj).forEach(
    (ele) => typeof ele === "object" && deepFreeze(ele)
  );
  return !Object.isFrozen(obj) && Object.freeze(obj);
};
deepFreeze(user);
// Object.freeze(user);
// user.age = 20;
user.home.city = "Belgaum";
console.log(user);
