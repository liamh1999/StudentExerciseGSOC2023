const path = require('path');

module.exports = {
  entry: './firstTask.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
