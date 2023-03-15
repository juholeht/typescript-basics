import axios, {AxiosResponse} from 'axios';
import { Eventing } from './Eventing';

// in case on 'user' T = User and K = UserProps 
export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    // deserialize takes json type of K eventually returns type T
    public deserialize: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
   return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((value: K) => {
          this.models.push(this.deserialize(value));
        });
        this.events.trigger('change');
    });
  }
}