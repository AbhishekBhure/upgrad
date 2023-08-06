function caltax(price, tax) {
  console.log(
    `The total price after tax is ${parseInt(price + (tax / 100) * price)}`
  );
}

caltax(100, 20);
