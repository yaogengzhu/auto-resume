const path = require('path')
const basePath = path.resolve(__dirname, '../', '../')
module.exports = {
    basePath: basePath,
    distPath: path.resolve(basePath, 'dist'),
    docPath: path.resolve(basePath, 'doc'),
    srcPath: path.join(basePath, 'src')
}