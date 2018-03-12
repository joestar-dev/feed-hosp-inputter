const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
// const webpack = require("webpack");

module.exports = (env) => {
  console.log('env ', env)
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      // test: /\.(js|jsx)$/,
      exclude: /node_modules/
    }, 
    {
      test: /\.s?css$/,
      use: CSSExtract.extract({
        use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
            }
          },
        ]
      })
      // use: [
      //   'style-loader',
      //   'css-loader',
      //   'sass-loader'
      // ], 
    }]
  },
  plugins: [
    CSSExtract
  ],
  devtool: isProduction ? 'source-map' : 'inline-source-map' ,
  // devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map' ,
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public')
  }
  }
}