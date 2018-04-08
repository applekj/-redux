import React,{Component} from 'react';
import {connect} from 'react-redux';
import {AddTodoAction} from '../actions/action';

class AddTodo extends Component{
	constructor(props){
		super(props);

		this.handleAddTodo = this.handleAddTodo.bind(this);
	}
  
  handleAddTodo(dispatch){
    if (!this.refs.myText.value.trim()) {
    	return;
    }
    dispatch(AddTodoAction(this.refs.myText.value));
    this.refs.myText.value = "";
  }

	render(){
		const {dispatch} = this.props;
		return (
      <div>
        <input ref="myText"/>
        <button onClick={() => {this.handleAddTodo(dispatch)}}>Add Todo</button>
      </div>
		)
	}
}

const AddTodoContainer = connect()(AddTodo);
export default AddTodoContainer;