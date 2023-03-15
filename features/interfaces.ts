// We don't need to define name, year or broken in interface since only summary is called.
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  }
};

const favoriteDrink  = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink har ${this.sugar} grams of sugar`;
  }
};

// With interface your can replace long types like: {name: string; year: number; broken: boolean }
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(favoriteDrink);
