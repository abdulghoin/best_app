var debug   = true;
var webpack = require('webpack');
var path    = require('path');

module.exports = {
  context: path.join(__dirname, "src/js"),
  entry: './app.js',
  output: {
    path: __dirname,
    filename: './src/app.min.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: debug ? 'inline-sourcemap' : 'cheap-module-source-map',
  entry: "./app.js",
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false, minimize: true }),
  ],
};
