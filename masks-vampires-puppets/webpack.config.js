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
  mode: "development",
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
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html', 'masks'])
  ],
};

module.exports = [browser, worker];
