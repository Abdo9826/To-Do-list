// const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: {
//     bundle: path.resolve(__dirname, 'src/index.js'),
//   },
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: '[name].js',
//   },

// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
