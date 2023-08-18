const tenTime = function (b) {
  let a = 10;
  return function mulitply(b) {
    return a * b;
  };
};

const mulitplyTime = tenTime();

// console.log(mulitplyTime(5));

const greetMe = function (greeting) {
  return (user) => `${greeting}, ${user}`;
};

const hey = greetMe("Hey");
console.log(hey("Don"));
