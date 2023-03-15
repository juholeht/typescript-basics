import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    // location is undefined at this point so we cannot assign lat
    // like location.lat = parseFloat(faker.address.latitude())
    this.location = { 
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()) 
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`
  }
}
