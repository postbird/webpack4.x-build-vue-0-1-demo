const path = require('path');

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
            publicPath: 'dist/images/',
          }
        }]
      },
    ]
  }
}