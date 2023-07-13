const { title, authors, publisher, cost } = {
  id: 1,
  title: "Ego is the Enemy",
  authors: [
    {
      authorCode: 1,
      name: "Ryan Holiday",
    },
    {
      authorCode: 2,
      name: "Robert Greene",
    },
  ],
  publisher: "Harper",
  isbn10: "0-0960-XYZ",
  cost: 7.99,
};

// console.log(
//   `The ${title} book author's are ${authors
//     .map((ele) => ele.name)
//     .join(" and ")} was published by ${publisher} for the cost $${cost}`
// );

const tsla = {
  stdIdx: 201829,
  stName: "TSLA",
  price: 700,
  stDetails: {
    name: "Tesla, Inc",
    ceo: "Elon Mask",
  },
};

let {
  stName: stock,
  price: value,
  stDetails: { name: company, ceo },
  ...rest
} = tsla;

console.log(
  `The stock ${stock} it's price is $${value} and it's company name is ${company} and it's ceo is ${ceo}`
);
console.log(rest);
