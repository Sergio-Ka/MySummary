'use strict'

const webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './source/index.js' /*{
        pug: './index.pug'
    }*/,

    output: {
        filename: 'public/bundle.js'
    },

    plugins: [
        new ExtractTextPlugin('public/style.css'),
        new HtmlWebpackPlugin({template: 'source/index.pug'})
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
            loader: 'file-loader?name=public/fonts/[name].[ext]'
        },
        {
            test: /\.png$/,
            loader: 'file-loader?name=public/images/[name].[ext]'
        }
        ]

    }
};