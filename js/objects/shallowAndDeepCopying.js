const user = {
  id: 1,
  name: "John Doe",
  age: 23,
  home: {
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: 10001,
    favColor: ["Red", "Black"],
    loc: {
      lat: 40.7128,
      lng: 74.006,
    },
  },
};

//shallow copying
// let joeM = { ...user };
// joeM.age = 20;
// joeM.home.address = "120 mandoli road ";
//when we try to access address as it refered to the parent obj, it mutates the parent address too hence shallow copying does not copy the nested obj.

//deep copying

const deepCopying = function (obj) {
  let tempObj = {};
  for (let key in obj) {
    tempObj = {
      ...tempObj,
      [key]:
        typeof obj[key] === "object" && !Array.isArray(obj[key])
          ? { ...deepCopying(obj[key]) }
          : typeof obj[key] === "object" && Array.isArray(obj[key])
          ? [...obj[key]]
          : obj[key],
    };
  }
  return tempObj;
};

let joeM = deepCopying(user);
joeM.age = 20;
joeM.home.address = "120 mandoli road ";

console.log("orignal:", user);
console.log("copy:", joeM);
