const path = require('path')
const merge = require('webpack-merge')
const webpackDevConfig = require('./webpack.dev')
const config = require('./config')
const htmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMarkdownToPdfPlugin = require('webpack-markdown-pdf-plugin')


const webpackDemoConfig = merge(webpackDevConfig, {
    entry: path.resolve(config.srcPath, 'index.js'),
    output: {
        filename: 'js/index.js',
        path: path.resolve(config.basePath, './docs'),
        publicPath: './'
    },

    module: {
        rules: [{
            test: /\.html$/,
            use: [{loader: 'html-loader'}]
        }, ]
    }, 
    
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(config.srcPath, 'index.html'),
            inject: 'body'
        }),
        new WebpackMarkdownToPdfPlugin({
            filename: './pdf/[name].pdf',
        })
    ]
})


module.exports = webpackDemoConfig