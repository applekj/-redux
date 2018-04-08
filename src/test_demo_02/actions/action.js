let index = 0;
export const AddTodoAction = (text) => ({
	type:'ADD_TODO',
	id:index++,
	text:text
});

export const ToggleTodo = (id) => ({
	type:'TOGGLE_TODO',
	id:id
});

export const SHOW_ALL = {
	type:'SHOW_ALL'
};

export const SHOW_ACTIVE = {
	type:'SHOW_ACTIVE'
};

export const SHOW_COMPLETED = {
	type:'SHOW_COMPLETED'
}