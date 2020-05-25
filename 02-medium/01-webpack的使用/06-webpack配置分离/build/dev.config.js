// 开发时需要的配置
// 使用merge合并
const WebpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = WebpackMerge(baseConfig, {
  devServer:{
    contentBase: './dist',
    inline: true
  }
})
