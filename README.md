# 一、什么是redux
#### `redux`是一个基于`flux`的前端架构，它提供了一个对象`store`，用来整个应用的数据（也叫状态），redux规定一个项能有一个store对象，那store是什么呢，如下图：
可以看到store就是一个对象，里面有5个方法，分别是dispatch,getState,replaceRducer,subscribe,Symbol。那store是如何管理数据的呢，在redux里，数据叫state（注意，这里的state跟react组件自身的属性state不是同一个概念），改变state，view就会相应的改变,action就是改变数据的通知，通过dispatch方法将action发送给store，store接受到action，就会改变state，这个state的计算过程就叫reducer。
dispatch方法，用来发送action到store
replaceReducer方法，用来调用reducer，计算得到新的state。
getState方法，通过store.getState()可以拿到state。
subscribe方法，可以理解为addEventLister，监听到数据的变化，重新渲染view。