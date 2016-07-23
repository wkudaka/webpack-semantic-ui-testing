var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');



module.exports = {
  entry: './app/index.js',
  output: {
    index: './app/index',
    vendor: [
      'react',
      'react-dom',
      'jquery'
    ],
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  devServer:{
    inline: true,
    contentBase: './dist',
    port:3000
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
  plugins:[
    HtmlWebpackPluginConfig,
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
