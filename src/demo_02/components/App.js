import React,{Component} from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from './Footer';

class App extends Component {
	constructor(props){
		super(props);
	}
	
	render(){
		return (
	    <div>
	    	<AddTodo />
	      <VisibleTodoList />
	      <Footer />
	    </div>
		)
	}
}

export default App;