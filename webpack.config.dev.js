const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

const devServer = {
  host: '0.0.0.0',
  port: 8080
};

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://' + devServer.host + ':' + devServer.port,
    'webpack/hot/only-dev-server',
    './client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss'],
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css?module&localIdentName=[local]___[hash:base64:5]', 'postcss', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url?limit=100000'],
      },
    ]
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    host: devServer.host,
    port: devServer.port,
    historyApiFallback: {
      index: './dist/'
    },
  },
};
