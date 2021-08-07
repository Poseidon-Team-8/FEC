var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devtool: "eval-source-map",
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
              {options: new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
              }]

            ]
          }
        }
      }
    ]
  }
};
