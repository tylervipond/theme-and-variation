const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  target: 'webworker',
  entry: {
    "populate-frames": "./src/populate-frames.js"
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: require.resolve('@open-wc/webpack-import-meta-loader'),
      },
    ],
  },
};
