const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
    bundle: path.resolve(__dirname, 'src/Index.html'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].html',
  },

};

