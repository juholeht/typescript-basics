const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// if not initialized:
const carsByMakeNotInitialized: string[][] = [];
const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camarro']
]

// Help with inference when extracting values
const firstCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toLocaleUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
