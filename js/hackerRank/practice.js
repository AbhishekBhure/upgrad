const duplicate = ["h", "i", "g", "h"];

const isDuplicates = (arr) => {
  for (const i of arr) {
    if (i === "h") {
      let newArr = [];
      newArr.push(i);
      return newArr;
    }
  }
};
console.log(isDuplicates(duplicate));
