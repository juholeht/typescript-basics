@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops, boat was sunk...')
  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void {
    // throw Error();
    console.log("speed: ", speed, generateWake);
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log("class decorator: ", constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

// First argument is the protype of the object
// second is the key of the property/method/accessor
// third is the property descriptor (tells if property is writable, etc. )
// 
// Executed only one single time when class is loaded
//
// FIXME: because of logError pilot params (speed and generateWake) is undefined
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot('fast', true);