const path = require('path')
const config  = require('./config')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMarkdownToPdfPlugin = require('webpack-markdown-pdf-plugin')
const webpack = require('webpack')
const ENV = process.env.NODE_ENV

module.exports = {
    entry: path.resolve(config.basePath, 'src/index.js'),
    output: {
        filename: 'js/index.js',
        path: path.resolve(config.basePath, './docs'),
        publicPath: './'
    },
    
    resolve: {
        extensions: [".js", ".json"],
        modules: ['node_modules'],
        alias: {
            '@': config.basePath,
            '@src': config.srcPath
        }
    },  
    
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        }, {
            test: /\.(sc|c)ss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8920
                }
            }, {
                loader: 'file-loader',
                options: {
                    name: ENV == 'product' ? '[name].[hash].[ext]' : '[name].[ext]',
                    outputPath: './images'
                }
            }
        ]
        }, {
            test:/\.(eot|woff2|woff|ttf|svg)/,
            use:[{
                loader:'url-loader',
                options:{
                    name:'[name][hash:5].min.[ext]',
                    limit:5000,
                    publicPath:'',
                    outputPath:'dist/',
                    useRelativePath:true
                }
            }]
        }, {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                }, {
                    loader: "markdown-loader",
                    options: {
                        /* your options here */
                    }
                }
            ]
        }, {
            test: /\.html$/,
            use: [{loader: 'html-loader'}]
        }]
    },

    devServer: {
        host: '0.0.0.0',
        publicPath: '/',
        hot: true
    },

    plugins: [
        new ProgressBarPlugin(),
        new htmlWebpackPlugin({
            template: path.join(config.srcPath, 'index.html'),
            inject: 'body'
        }),
        new WebpackMarkdownToPdfPlugin({
            filename: './pdf/[name].pdf',
        }),

        new webpack.HotModuleReplacementPlugin()
    ]
}