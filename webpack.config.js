const path = require('path');
const SRC_DIR = path.join(__dirname, '/src/index.jsx');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
    ]
  },
  watch: true
};