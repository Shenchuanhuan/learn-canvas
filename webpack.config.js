const path = require('path');
const webpack = require('webpack');
const HtmlWwbpackPlugin = require('html-webpack-plugin');
const BASE_PATH = path.join(__dirname, 'src');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(jsx|jsx)$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: ['babel-loader']
            }, {
                test: /\.(css|scss|less)$/,
                use: ['css-loader', 'style-loader', 'sass-loader']
            }, {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                use: ['url-loader']
            }
        ]
    },
    plugins: [
        new HtmlWwbpackPlugin({
            title: 'test',
            inject: true,
            teplate: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        alias: {
            Test: path.resolve(__dirname, `${BASE_PATH}/test`)
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8070,
        hot: true
    }
}
