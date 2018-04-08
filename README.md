## 一、什么是redux  
redux是一个基于flux的前端架构，它的设计思想很简单，认为一个web应用就是一个状态机，视图与状态是一一对应的，所有的状态都保存在一个对象里。  这里有3个基本概念需要理清楚  
**state**: 它是一个对象，应用所有的状态都保存在这个对象里，state长什么样，view就长什么样(注意这里的state跟react的state不是一个概念)      
**action**: 用来改变state的指令，它是一个对象，可以理解为应用的输入    
**reducer**: 它是一个方法，应用收到action以后，调用这个方法，返回一个新的state，可以理解为应用的输出      
## 二、redux是怎么工作的
在redux里，真正干活的是`store`，那`store`是什么呢，如下图：  
![加载失败，请刷新网页](https://github.com/applekj/redux-learn/blob/master/img/store.jpg)  
可以看到`store`就是一个对象，里面有5个方法，分别是`dispatch`,`getState`,`replaceRducer`,`subscribe`,`Symbol`  
要了解redux是如何工作的，只需要了解前3个核心方法即可：  
**dispatch**: 视图调用此方法用来发送action到store,这是改变数据的唯一方法          
**getState**: 通过该方法可以拿到state，state与store的关系就是state = store.getState()     
**subscribe**: 用来监听view的更新函数(在react里，更新函数指的是ReactDOM的render方法)，一旦state发生变化，自动执行该函数，改变view  

结合redux官方例子，来看看redux是怎么工作的
```
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//定义reducer
const counterReducer = (state = 0 ,action) => {
  console.log(state,'this is state!');
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
console.log(store,'this is store!');

class App extends Component{
	constructor(props){
    super(props);
	}

	render(){
		return (
      <p>
      	Clicked:<span id="value">{store.getState()}</span> times
      	<button id="increment" onClick={()=> {store.dispatch({type:'INCREMENT'})}}>+</button>
      	<button id="decrement" onClick={() => {store.dispatch({type:'DECREMENT'})}}>-</button>
      </p>
		)
	}
};

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('main')
  )
};

render();
store.subscribe(render);

//设置热更新
if (module.hot) {
  module.hot.accept();
}
```

在上例中，view在用户点击按钮时，只负责发送action，store接收到action后，自动调用reducer得到新的state，程序再通过getState方法拿到数据改变view    
**注意**: state长什么样，是由reducer控制的，它可以是数字、字符串、数组也可以是对象;上例中，在reducer里设置state的初始值为0,如果没有初始值，会报错，因为初始值默认为undefined，与数字相加得到的是NaN  
看到这里基本明白了redux是怎么工作的，如果还不明白，对照上例，再看一遍，跟着手写一遍，加深下理解