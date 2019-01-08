module.exports = {
  mode: 'production',
  entry: {
    'main': './main.js'
  },
  output: {
    path: path.resolve('./dist/'),
    filename: './build.js'
  },
}