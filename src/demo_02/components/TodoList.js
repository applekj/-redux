import React,{Component} from 'react';
import Todo from './Todo';

/*const TodoList = ({todos,toggleTodo}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
*/

class TodoList extends Component {
  constructor(props){
  	super(props);
  }

  render(){
  	const {todos,toggleTodo} = this.props;
    console.log(this.props);
    return (
      <ul>
      	{todos.map(todo => <Todo 
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}   
      	/>)}
      </ul>
    );
  }
}

export default TodoList;
