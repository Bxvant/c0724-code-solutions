const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const mapArray = prices.map((price) => ({
  price,
  salePrice: price / 2,
}));

console.log(mapArray);

const formatedPrices = prices.map((price) => `$${price.toFixed(2)}`);
console.log(formatedPrices);
