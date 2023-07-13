"use strict";

const products = [
  {
    id: 1,
    name: "Oranges",
    quantity: 2,
    cost: 1.2,
  },
  {
    id: 2,
    name: "Chocolate Cake",
    quantity: 2,
    cost: 65,
  },
  {
    id: 3,
    name: "Coke Zero",
    quantity: 12,
    cost: 1.45,
  },
];

const totalCost = (item) => {
  return `Total Cost: $${item.quantity * item.cost}
------------------------------`;
};

for (const product of products) {
  for (const prop in product) {
    console.log(`${prop}: ${product[prop]}`);
  }

  console.log(totalCost(product));
}
