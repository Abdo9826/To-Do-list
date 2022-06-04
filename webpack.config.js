const path = require('path');
// const HtmlWebpackPlugin = require('html-htmlwebpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  //   plugins: [
  //     new HtmlWebpackPlugin({
  //       title: 'Webpack App',
  //       filename: 'index.html',
  //     }),
  //   ],
};
