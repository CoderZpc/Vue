// 生产时需要的配置
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// 使用merge合并
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})