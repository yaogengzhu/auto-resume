const webpack = require('webpack')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')


module.exports = merge(webpackBaseConfig, {
    devServer: {
        host: '0.0.0.0',
        publicPath: '/',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})

    