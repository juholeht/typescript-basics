const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

// in tuple order is everything. With type developer can define the order.
type Drink = [string, boolean, number];
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// tuple is not very convinient since this is hard to read
const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};