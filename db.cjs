// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Faker, en } = require('@faker-js/faker');

const customFaker = new Faker({ locale: [en] });

// eslint-disable-next-line no-undef
module.exports = () => {
  const data = { products: [] };
  for (let i = 0; i < 100; i++) {
    data.products.push({
      id: customFaker.string.uuid(),
      name: customFaker.commerce.productName(),
      priceMin: customFaker.commerce.price(),
      priceMax: customFaker.commerce.price(),
      description: customFaker.commerce.productDescription(),
      image: {
        '200x200': customFaker.image.url(200, 200),
        '400x400': customFaker.image.url(400, 400),
      },
    });
  }
  return data;
};
