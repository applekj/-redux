import undoable,{includeAction} from 'redux-undo';

const addTodoReducer = (state = [],action) => {
	switch (action.type){
		case 'ADD_TODO':
		  return [...state,{id:action.id,text:action.text,completed:false}];
		case 'TOGGLE_TODO':
		  return state.map(item => item.id === action.id?{...item,completed:!item.completed}:item);  
	  default:
	    return state;
	}
};


//增强reducer
const undoableTodos = undoable(addTodoReducer, { filter: includeAction(['ADD_TODO', 'TOGGLE_TODO']) });

export default undoableTodos;