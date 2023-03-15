export class Attributes<T> {
  constructor(private data: T) {}

  // In typescript string can be type and in javascript
  // attributes are keys. We can utilize these two facts
  // together.
  // 
  // Constraint is that value of K can be only attribute of type T.
  // Return type K attribute value from type T object.
  // 
  // this.data works only with arrow functions with
  // passthrough functions.
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    // assign overrides 'update' props to 'data'
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}