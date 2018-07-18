const webpack = require('webpack');
const path = require('path');

var SRC = path.resolve(__dirname, 'src');

var config = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.(png|jpe?g|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: SRC,
                loader: 'file-loader'
            }
        ]
    },
}

module.exports = config;
