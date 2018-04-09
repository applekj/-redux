import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//定义reducer
const counterReducer = (state = 0 ,action) => {
  console.log(state,'this is state!');/*打印state，这里它是一个数字*/
  switch (action.type) {
    case 'INCREMENT':
      return {value:state + 1};
    case 'DECREMENT':
      return {value:state - 1};
    default :
      return state;
  }
};

//创建store
const store = createStore(counterReducer);
console.log(store,'this is store!');/*打印store，看看store是什么*/

//定义组件
class App extends Component{
	constructor(props){
    super(props);
	}

	render(){
		return (
      <p>
      	Clicked:<span id="value">{store.getState()}</span> times  {/*获取数据，展示*/}
      	<button id="increment" onClick={()=> {store.dispatch({type:'INCREMENT'})}}>+</button>
      	<button id="decrement" onClick={() => {store.dispatch({type:'DECREMENT'})}}>-</button>
      </p>
		)
	}
};

//渲染组件
const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('main')
  )
};

render();
//监听组件
store.subscribe(render);

//设置热更新
if (module.hot) {
  module.hot.accept();
}