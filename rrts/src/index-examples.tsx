import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}


// Functional way to create component with typescript:
// const App = (props: AppProps): JSX.Element => {
//  return <div>{props.color}</div>;
// }



// interface AppState {
//  counter: number;
// }

class App extends React.Component<AppProps> {
  
  // if state is set in constructor developer needs to be
  // defined: React.Component<AppProps, AppState>
  //constructor(props: AppProps) {
  //  super(props);

  //  this.state = { counter: 0 };
  // }

  state = { counter: 0 };

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  };


  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 })
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    )
  }
}

ReactDOM.render(<App color="red" />, document.getElementById("root"));
