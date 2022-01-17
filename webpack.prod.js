const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
//   devtool: 'source-map',
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:10].css',
            chunkFilename: '[id].css',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        },
                    },
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    "css-loader",
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        },
                    },
                    // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
                    "css-loader",
                    'less-loader'
                ],
            },
        ]
    },
});