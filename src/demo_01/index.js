import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {counterReducer} from './reducers/reducer';

const store = createStore(counterReducer);
console.log(store);

class App extends Component{
	constructor(props){
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
	}

  handleIncrement(action){
    store.dispatch(action)
  }

  incrementIfOdd() {
    if (store.getState().value% 2 !== 0) {
      this.handleIncrement({type:'INCREMENT'});
    }
  }

  incrementAsync() {
    setTimeout(() => {this.handleIncrement({type:'INCREMENT'})}, 1000);
  }

	render(){
		return (
      <p>
      	Clicked:<span id="value">{store.getState().value}</span> times
      	<button id="increment" onClick={this.handleIncrement.bind(this,{type:'INCREMENT'})}>+</button>
      	<button id="decrement" onClick={() => {this.handleIncrement({type:'DECREMENT'})}}>-</button>
      	<button id="incrementIfOdd" onClick={this.incrementIfOdd}>Increment if odd </button>
      	<button id="incrementAsync" onClick={this.incrementAsync}>Increment async</button>
      </p>
		)
	}
};

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('main')
  )
};

render();
store.subscribe(render);

if (module.hot) {
  module.hot.accept();
}