let time = new Date().getHours();
const greetUser = (time) => {
  if (time < 12) {
    console.log("GoodMorning");
  } else if (time < 17) {
    console.log("GoodNoon");
  } else {
    console.log("GoodEvening");
  }
};

greetUser();
