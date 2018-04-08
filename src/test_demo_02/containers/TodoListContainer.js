import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ToggleTodo} from '../actions/action';

class TodoList extends Component{
	constructor(props){
		super(props);
	}
  
	render(){
		const {todos,toggleTodoList} = this.props;
		return (
      <ul>
        {todos.map(item =>  (
          <li
            key={item.id}
            onClick={() => toggleTodoList(item.id)}
            style={{textDecoration: item.completed ? 'line-through' : 'none'}}
            >{item.text}</li>
        ))}
      </ul>
		)
	}
};

const filter = (todos,filter) => {
	switch (filter){
		case 'SHOW_ALL':
		  return todos;
		case 'SHOW_ACTIVE':
		  return todos.filter(item => !item.completed);
		case 'SHOW_COMPLETED':
		  return todos.filter(item => item.completed);
	}
}

const mapStateToProps = (state) => {
  return {todos:filter(state.addTodoReducer.present,state.filterReducer)}
};

const mapDispatchToProps = (dispatch) => ({
	toggleTodoList : id => dispatch(ToggleTodo(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);