// type of return value is interferred if it's not declared.
// WARNING: in case return is missing function return type is interferred as void
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return b - a;
}

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // null and undefined doesn't give error
  // return null;
  // return undefined;
};

// return type 'never' means that function doesn't anything, EVER (really rare case.)
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

// destructuring with annotations
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};
