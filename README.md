## 快速启动
git clone https://github.com/applekj/redux-learn.git  
npm i   
npm run start  
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

**dispatch**: 视图调用此方法来发送action到store,redux规定这是改变数据的唯一方法 

**getState**: 通过该方法可以拿到state，state与store的关系就是state = store.getState()     

**subscribe**: 用来监听view的更新函数(在react里，更新函数指的是ReactDOM的render方法)，一旦state发生变化，自动执行该函数，改变view  

结合redux官方例子，来看看redux是怎么工作的
```
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
```

在上例中，view在用户点击按钮时，只负责发送action，store接收到action后，自动调用reducer得到新的state，程序再通过getState方法拿到数据改变view 

**注意**: state长什么样，是由reducer控制的，它可以是数字、字符串、数组，也可以是对象;上例中，在reducer里设置state的初始值为0,如果没有初始值，初始值默认为undefined，view发送action时会报错，因为undefined与数字相加得到的是NaN  

看到这里基本明白了redux是怎么工作的。在实际react项目中，为方便使用redux，会用到react-redux库，接下来介绍react-redux用法，务必理解redux的基本用法

## 三、如何使用react-redux库
react-redux将组件分为两大类，UI组件和逻辑组件（也叫容器组件），react-redux提供一个方法connect(),将UI件和逻辑件关联起来，事实上，逻辑件是通过调用connect方法定义的，例如：
```
const AddTodoContainer = connect()(AddTodo);
```
可以看出connect()方法返回值也是一个方法，传入UI件，生成逻辑件；connect()方法可以传入两个参数，第一个参数mapStateToProps，第二个参数mapDispatchToProps。 

**mapStateToProps**： 这个参数事实上是一个方法，它接受state作为参数，返回一个对象，UI件可以获取到该对象，用于展示数据，该方法将逻辑件的数据映射到UI件  

**mapDispatchToProps**: 这个参数是一个对象，也可以是一个方法，如果是一个方法，它返回一个对象，不管如何，UI件都能获取到如这样的对象{filter:filter => dispatch(filter)}，该对象里的value值是一个方法，UI件通过调用该方法，将action传给store，改变state  

注意：这两个参数是可以省略的，如果省略，UI件只能得到一个dispatch方法   

**Provider**： connect()方法生成逻辑组件后，需要让逻辑组件拿到state,如何拿到state呢，只需要在项目根组件外包一层即可，就像这样：
```
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
结合例子，深入理解react-redux  
修改webpack.config.js文件
```
'./src/counter/index.js'  改为  './src/todoList/index.js'
```
启动项目  
npm run start




> redux并不一定要搭配react使用，它只是一个状态管理库，几乎可以搭配任何框架使用，如果这篇文章对您学习redux有帮助，不妨点个star    
本人目前求职中，职位：前端开发工程师，坐标：武汉，如有小伙伴内推，或者需要前端开发，联系QQ：253814787 邮箱：yanjingjie86@126.com  
