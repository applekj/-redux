import {combineReducers} from 'redux';
import addTodoReducer from './addTodoReducer';
import filterReducer from './filterReducer';

export default combineReducers({
	addTodoReducer,
	filterReducer
});