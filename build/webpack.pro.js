const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.dev')
const config = require('./config')


const webpackDemoConfig = merge(webpackBaseConfig, {
    entry: path.resolve(config.srcPath, 'index.js'),
    
})


module.exports = webpackDemoConfig