const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: true,
  entry: {
    'main': './src/main.js'
  },
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|webp|jpeg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
            outputPath: 'images/',
            publicPath: 'images/',
          }
        }]
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 监听目录
    compress: true, //  gzip 压缩
    port: 8080, // 端口
    hot: true, // 热重载
    inline: true, // 内联模式 通过内置脚本监听热重载
    open: true, // 打开浏览器
  }
}