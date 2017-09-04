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
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['react','es2015']
                    }
                }
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
            title: 'canvas-recording',
            inject: true,
            template: 'index.html'
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
        hot: true,
        inline: true 
    }
}
