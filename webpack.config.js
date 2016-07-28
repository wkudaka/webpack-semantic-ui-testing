var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var DIST_FOLDER_NAME = 'dist';

module.exports = {
  entry: {
    index: './app/index',
    vendor: [
      'react',
      'react-dom',
      'jquery',
      //@TODO: find a better way to import semantic...
      './app/styles/semantic/semantic.js',
      './app/styles/semantic/semantic.css'
    ]
  },
  devServer:{
    inline: true,
    contentBase: './'+DIST_FOLDER_NAME,
    port:3000
  },
  output: {
    path: path.join(__dirname, DIST_FOLDER_NAME),
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
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=20000'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
    }),
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
      inject:false
    }),
    new CopyWebpackPlugin([
      {from: 'app/data/data.json'}
    ])
  ]
};
