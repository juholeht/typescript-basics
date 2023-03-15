// import adds Reflect variable to global variable
import 'reflect-metadata'

@controller
class Plane {
  color: string = 'red';

  @get('HI THERE')
  fly(): void {
    console.log('brrrrrr');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  }
}

// iterates through prototype keys (e.g. 'fly') and prints
// secret from every key.
function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);

    // router.get(path, middleware, target.prototype[key]);
  }
}

/*
const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);
*/

/*
const plane = {
  color: 'red'
};


// add metadata to object
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

console.log(plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note, height);

// add metadata to property (color)
//
// key for metadata is 'note' and value for that key is 'hi there'.
// Metadata will be defined for plane object's 'color' property.
Reflect.defineMetadata('note', 'hi there', plane, 'color');
const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);
*/