const nums = [999, 879, 67, 99, 120, 304, 786];

const asc = [...nums].sort((a, b) => a - b);
// console.log(asc);

const desc = [...nums].sort((a, b) => b - a);
// console.log(desc);

const citizens = [
  {
    id: 1,
    name: "John Smith",
    age: 65,
  },
  {
    id: 2,
    name: "Roger McShane",
    age: 68,
  },
  {
    id: 3,
    name: "Dolly McShane",
    age: 55,
  },
  {
    id: 4,
    name: "Joan Mockery",
    age: 61,
  },
];

const displayList = (arr, sortFn) =>
  sortFn([...arr]).forEach((ele) =>
    console.log(`${ele.name} is ${ele.age} years old`)
  );

const sortAgeAsc = (arr) => arr.sort((a, b) => a.age - b.age);
const sortAgeDesc = (arr) => arr.sort((a, b) => b.age - a.age);
const sortByName = (arr) =>
  arr.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));

displayList(citizens, sortByName);

const perfumes = [
  {
    id: 1,
    brand: "Fruity by Kiwi 50ml",
    cost: 300,
  },
  {
    id: 2,
    brand: "Silly Smelly",
    cost: 575,
  },
  {
    id: 3,
    brand: "Ocean Mist by Ventuo",
    cost: 1243,
  },
  {
    id: 4,
    brand: "Spotlight",
    cost: 991,
  },
  {
    id: 5,
    brand: "Horrendous by Britney",
    cost: 230,
  },
];

const mostExpensive = [...perfumes].sort((a, b) => b.cost - a.cost)[0];
const cheapest = [...perfumes].sort((a, b) => a.cost - b.cost)[0];

// console.log(`Most Expensive: ${mostExpensive.brand} at $${mostExpensive.cost}`);
// console.log(`Cheapest: ${cheapest.brand} at $${cheapest.cost}`);
