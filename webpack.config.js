const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: './public/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'quest-map',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(['build']),
    new LiveReloadPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './build'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loader: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};