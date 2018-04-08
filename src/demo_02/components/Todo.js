import React,{Component} from 'react';

/*const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo*/

class Todo extends Component {
	constructor(props){
		super(props);
	}

	render(){
		const {text,completed,onClick} = this.props;
		return (
      <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
      >
      	{text}
      </li>
		)
	}
};

export default Todo;