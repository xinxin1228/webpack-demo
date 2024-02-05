const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
    hot: true,
  },
  entry: './src/index',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loader-demo/src/index.js'),
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
