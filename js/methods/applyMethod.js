let order1 = {
  id: 1,
  name: "John",
  product: "fan",
  price: 1200,
};
let order2 = {
  id: 2,
  name: "Jenny",
  product: "cooler",
  price: 1500,
};
let order3 = {
  id: 3,
  name: "Jen",
  product: "ac",
  price: 2000,
};

const showDetails = function (username) {
  console.log(
    `Hi ${this.id}:${this.name}, your order for ${this.product} has been placed successfully.`
  );
};

showDetails.apply(order2, ["John"]);
