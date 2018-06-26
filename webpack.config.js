'use strict'

const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './source/index.js' /*{
        pug: './index.pug'
    }*/,

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
        /*filename: 'public/bundle.js'*/
    },

    plugins: [
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({template: 'source/index.pug', filename: '../index.html'})
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

    }
};