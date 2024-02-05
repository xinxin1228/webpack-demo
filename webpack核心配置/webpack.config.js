const path = require('node:path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  mode: 'development',
  entry: {
    // main: './src/index.js',
    // foo: { import: './src/foo.js', dependOn: 'main', filename: 'a.js' },

    // 第二
    main: { import: './src/index.js', runtime: 'common-runtime' },
    foo: {
      import: './src/foo.js',
      runtime: 'common-runtime',
      filename: 'a.js',
    },
  },
  experiments: {
    lazyCompilation: true,
  },
  profile: true,
  output: {
    // filename: 'bundle.js',
    // path: path.resolve(__dirname, 'build'),
    // publicPath: 'www.baidu.com/',
  },
  cache: {
    type: 'filesystem',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    port: 8080,
    hot: true,
  },
}
