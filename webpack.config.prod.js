const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
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
        loaders: ['babel'],
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
        loaders: ['url?limit=50000'],
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  }
};
