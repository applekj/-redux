import {connect} from 'react-redux';
import {toggleTodo} from '../actions';
import TodoList from '../components/Todolist';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

const mapStateToProps = state => {
  return {
	  todos:getVisibleTodos(state.todos,state.visibilityFilter)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);