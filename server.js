const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname,'public')));

if (process.env.NODE_ENV !== 'production') {
  let webpackConf = require('./webpack.config.js');
  let webpack = require('webpack');
  let compiler = webpack(webpackConf);
  let webpackMiddleware = require('webpack-dev-middleware');
  
  //使用webpack-dev-middleware自动编译
  app.use(webpackMiddleware(compiler,{
    publicPath:"/",
    stats:{colors:true},
    lazy:false,
    watchOptions:{
      aggregateTimeout:300,
      poll:true
    }
  }));

  //配置hot更新
  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/',function(req,res){
  res.render('index');
});

app.listen(3000,function(err){
  if (err) throw err;
  console.log('runing on port 3000.');
});