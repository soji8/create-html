const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [ 'style-loader', 'css-loader', 'less-loader' ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
            filename: 'static/font/[hash][ext][query]'
        }
      },
      // { exclude: /\.(html|css|less|js|img|png|gif)$/ }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: resolve(__dirname, 'public'),
    },
    compress: true, // 启动gzips压缩
    open: true,			// 自动打开浏览器
    port: 3002,			// 端口号
  },
  optimization: {
    splitChunks: {
        chunks: 'all',
    },
  },
  resolve: {
    // 配置省略文件路径的后缀名
    extensions: ['.tsx', '.ts', '.js'],
  }
}