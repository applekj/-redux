import {combineReducers} from 'redux';
import todos from './addTodoReducer';
import visibilityFilter from './visibilityFilterReducer';


//combineReducers函数的作用是生成一个state对象，key值分别是todos,visibilityFilter,value是reducer的数据，可以是数组，对象，字符串,数字或者boolean
export default combineReducers({
	todos,
	visibilityFilter
});