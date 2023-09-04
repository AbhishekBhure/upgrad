const faker = require('faker');
const { v4: uuidv4 } = require('uuid');

module.exports = () => {
  const data = { products: [] };

  for (let x = 0; x < 10; x++) {
    data.products.push({
      id: uuidv4(),
      product: faker.fake('{{commerce.product}}'),
      price: faker.fake('{{commerce.price}}'),
    });
  }

  return data;
};
