# 一、什么是redux  
redux是一个基于flux的前端架构，它的设计思想很简单，认为一个web应用就是一个状态机，视图与状态是一一对应的，所有的状态都保存在一个对象里。这里有3个基本概念需要理清楚
state:它是一个对象，应用所有的状态都保存在这个对象里，state长什么样，视图(view)就长什么样  
action:用来改变state的指令，它是一个对象，可以理解为应用的输入    
reducer:应用收到action以后，通过计算，返回一个新的state，这个计算过程就叫做reducer，可以理解为应用的输出      
# 二、redux是怎么工作的
在redux里，真正干活的是`store`，那`store`是什么呢，如下图：  
![加载失败，请刷新网页](https://github.com/applekj/redux-learn/blob/master/img/store.jpg)  
可以看到`store`就是一个对象，里面有5个方法，分别是`dispatch`,`getState`,`replaceRducer`,`subscribe`,`Symbol`  
下面详细介绍前3个方法(核心)：
> dispatch方法，视图调用此方法用来发送action到store,这是改变数据的唯一方法          
> getState方法，通过该方法可以拿到state，state与store的关系就是state = store.getState()     
> subscribe方法，用来监听view的更新函数(在react里，更新函数指的是ReactDOM的render方法)，一旦state发生变化，自动执行该函数，改变view  

结合redux官方例子，来看看redux是怎么工作的
#### 快速开始
```
git clone https://github.com/applekj/redux-learn.git
npm i
npm run start
```
