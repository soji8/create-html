const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash:6].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'static/images/[name].[hash:6][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'static/font/[name].[hash:6][ext][query]'
        }
      },
      // { exclude: /\.(html|css|less|js|img|png|gif)$/ }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  optimization: {
    splitChunks: {
        chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.tsx', '.ts', '.js'],
  }
}