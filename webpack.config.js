const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const srcDir = resolve(__dirname, 'src')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'standard-loader',
      exclude: /node_modules/
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            importLoaders: true,
            localIdentName: '[name]__[local]__[hash:base64:6]'
          }
        }
      })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${srcDir}/index.html`
    }),
    new DashboardPlugin(),
    new ExtractTextPlugin('styles.[chunkhash:6].css')
  ]
}
