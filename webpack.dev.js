const { merge } = require('webpack-merge');
const {resolve } = require("path");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.(c|le)ss$/i,
            use: [
                "style-loader",
                "css-loader",
                'less-loader'
            ]
        }
    ]
  },
  devServer: {
    static: {
      directory: resolve(__dirname, 'public'),
    },
    // 启动gzip 压缩
    compress: true,
    // 端口号
    port: 8080,
    open: true,
    hot: true,
  }
});