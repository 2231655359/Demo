const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // 配置开发服务器
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),// 指定服务器的根目录
    },
    port: 8080, // 指定服务器端口
    open: true, // 自动打开浏览器
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.js$/, // 匹配 JavaScript 文件
      exclude: /node_modules/, // 排除 node_modules 目录
      use: {
        loader: 'babel-loader', // 使用 Babel 加载器
        options: {
          presets: ['@babel/preset-env'], // 转译 ES6+ 代码
        },
      },
    },
    {
      test: /\.(jpg|png|svg)$/,
      type: 'asset'
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './Codellllll_jl.html', // 指定模板文件
    }),
  ]
};