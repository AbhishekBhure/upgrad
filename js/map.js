const nums = [
  [1, 2],
  [3, 4],
  [6, 5],
];

let toSum = nums.map(([a, b]) => a + b);

// console.log(toSum);

const users = [
  {
    firstName: "Don",
    lastName: "1",
    role: "developer",
  },
  {
    firstName: "Donn",
    lastName: "2",
    role: "developer",
  },
  {
    firstName: "Donnn",
    lastName: "3",
    role: "developer",
  },
  {
    firstName: "Donnnn",
    lastName: "4",
    role: "developer",
  },
];

const genId = () => parseInt(Math.random() * 100000);

const withId = users.map((user) => {
  return {
    id: genId().toString(),
    ...user,
  };
});
// console.log(withId);

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

const seniorCitizens = citizens.map((person) => {
  person.seniorCitizen = person.age >= 60;
  return person;
});

console.log(seniorCitizens);
