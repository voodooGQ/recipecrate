const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

const mode = slsw.lib.webpack.isLocal ? 'development' : 'production';
const externals = (mode === 'development') ? [nodeExternals()] : [];

module.exports = {
  mode,
  externals,
  entry: slsw.lib.entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  optimization: { minimize: false },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.ts$).*\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
};
