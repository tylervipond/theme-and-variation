const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

const worker = {
  target: 'webworker',
  entry: {
    "populate-frames": "./src/populate-frames.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
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

const browser = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin(['index.html', { from: 'masks', to: 'masks' }])
  ],
};

module.exports = [browser, worker];
