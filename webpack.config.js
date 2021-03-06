const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/index.ts',
    // devtool: 'inline-source-map',
    devtool: false,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                },
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            "__VUE_OPTIONS_API__": true,
            "__VUE_PROD_DEVTOOLS__": false,
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};
