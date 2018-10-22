'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './source/index.js',

  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({template: 'source/index.pug', filename: './index.html'}),
  ],

  module: {

    loaders: 
    [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
      },
      {
        test: /\.(svg|ttf|otf|eot|woff)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|ico)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]

  },

  devServer: {
    host: "localhost",
    port: "8080",
    contentBase:  __dirname + '/public'
  }

};

  if (NODE_ENV == 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true,
          drop_console: true,
          unsafe: true,
        },
    }));
  };

