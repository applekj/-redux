const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry:[
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/counter/index.js'
  ],
  output:{
    path:path.resolve(__dirname,'public'),
  	filename:'bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['env','stage-0','react'],
            plugins:[
              ['react-hot-loader/babel']
            ]
          }
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader'] 
      },
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      },
      {
        test:/\.(png|jpg)$/,
        use:'url-loader?limit=8192'
      }
    ]
  },
  /*devServer:{
    contentBase:path.join(__dirname,'public'),
    port:3000,
    hot:true
  },*/
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};