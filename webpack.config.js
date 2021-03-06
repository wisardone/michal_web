const path = require('path') 
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './js/index.js',
    './scss/main.scss',
  ],
  output: {
    filename: 'index.js',
    path: path.resolve('./dist/'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader']),
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ]
}