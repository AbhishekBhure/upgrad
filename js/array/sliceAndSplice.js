//slice
const keys = ["XAV-123-2309", "XAZ-456-2310", "XAW-789-2311"];
const date = keys.map((ele) => ele.slice(4, 7));
// console.log(date);

//splice
// const desk = ["laptop", "mouse", "keyboard", "montior", "microphone"];
// desk.splice(1, 2, "headphones", "earphones");
// console.log(desk);

const desk1 = ["laptop", "mouse", "keyboard", "montior", "microphone"];
const move = (arr, start, count, moveTo) => {
  const clone = [...arr];
  clone.splice(moveTo, 0, ...clone.splice(start, count));
  return clone;
};

let newDesk = move(desk1, 2, 2, 0);
// console.log(newDesk);

const hollywoodDirectors = [
  "Martin Scorsese",
  "David Dhawan",
  "Steven Spielberg",
  "Christopher Nolan",
  "Quentin Tarantino",
  "James Cameron",
];

//2 lines
hollywoodDirectors.splice(1, 1, "David Lean");
console.log(
  `Hollywood Masterclass featuring ${hollywoodDirectors.slice(0, 3)}`
);

//8 lines
const clone = (arr) => {
  copyArray = [...arr];
  copyArray.splice(1, 1, "David Lean");
  return copyArray;
};
// console.log(
//   `Hollywood Masterclass featuring ${clone(hollywoodDirectors).slice(0, 3)}`
// );

//10 lines
//   const removeAndInsert = (arr,elem, newEle) =>{
//       const findEle = arr.findIndex((e)=> e === elem)
//       const tempArray = [...arr]
//       tempArray.splice(findEle,1,newEle)
//       return tempArray;
//   }

//   const topThree = (arr)=> arr.slice(0,3)

//   const revisedList = removeAndInsert(hollywoodDirectors, 'David Dhawan', 'David Lean')
//   const directors = topThree(revisedList);

// console.log(`Hollywood Masterclass featuring ${directors}`);
