const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'production',
  entry: {
    'main': './src/main.js'
  },
  output: {
    path: path.resolve('./dist/'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.vue']
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [ 
          { loader: 'style-loader', options: { sourceMap: true } },
          { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
          { 
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|webp|jpeg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
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
      },
      {
        test: /\.(vue)$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
  ]
}