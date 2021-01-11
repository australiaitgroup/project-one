// node 环境和浏览器环境的区别
// 所有 react / 需要 webpack 打包的东西都用 import
// require 这个语法留到 node 去学
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 需求是把打包出来的文件改名为  main.js （而不是之前的 bundle.js）
// 1. webpack.config.js 改 output
// 2. 测试 -> 失败
// ?
// - 老的 bundle 还存在
// - index.html 还在引用 bundle.js
// 怎么解决呢？
// 工具 -> 动态插入到 html

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin()
  ]
};
