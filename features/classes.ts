// methods are public by default if public / private / protected to defined
class Vehicle {
  // instead of declaring "color: string;" and assign it in constructor "this.color = color;"
  // variable can be declared as public in constructor to achieve same.
  constructor(public color: string) {}

  protected honk(): void {
    console.log('HONK honk!');
  }
}

class Automobile extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const mobile = new Automobile(4, 'blue');
mobile.startDrivingProcess();

const vehicle = new Vehicle('orange');
console.log(vehicle.color);