import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AddTodo from './containers/AddTodo.js';
import {createStore} from 'redux';
import indexReducer from './reducers/indexReducer';
import TodoList from './containers/TodoListContainer.js';
import FilterBut from './containers/FilterFooter.js';

const store = createStore(indexReducer);
class App extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
      <div>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
        <FilterBut></FilterBut>
      </div>
		)
	}
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);

if (module.hot) {
	module.hot.accept();
}
