function funcOne() {
  console.log("hi");
}

function funcTwo() {
  setTimeout(function () {
    console.log("hello 2nd");
  }, 10000);
}

function funcThree() {
  console.log("hello 3rd");
}
function funcFour() {
  setTimeout(function () {
    console.log("hello 4");
  }, 10000);
}

funcOne();
funcFour();
funcTwo();
funcThree();
