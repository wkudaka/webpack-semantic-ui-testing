var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './app/index',
    vendor: [
      'react',
      'react-dom',
      'jquery'
    ]
  },
  devServer:{
    inline: true,
    contentBase: './dist',
    port:3000
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query:{
        presets:['es2015', 'react']
      }
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=20000'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      inject:false
    })
  ]
};
