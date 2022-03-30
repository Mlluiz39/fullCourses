const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
entry: './src/index.js',
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, './public')
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./public"),
    },
    port: 9000,
    hot: "only",
    
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          //'style-loader', 'css-loader'
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ]
}