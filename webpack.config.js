const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    loaders: [
            { test: /\.png$/, loader: 'url-loader?limit=100000' },
            { test: /\.jpg$/, loader: 'file-loader' },
            { test: /\.jpeg$/, loader: 'file-loader' },
            { test: /\.gif$/, loader: 'file-loader' },
            { test: /\.txt$/, loader: 'raw-loader' },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      }, {
        loader: 'babel-loader',
        exclude: /node_modules/,
        test: /\.js$/,
        query: {
          presets: ['es2015', 'react']
        }
      }]
  },
  plugins: [
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.OldWatchingPlugin()
  ]
}
