const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        // 正则表达式,匹配到css文件就应用下面的两个loader
        test: /\.css$/,
        // css-loader只解析css文件，使用import加载，返回css代码
        // style-loader将模块的导出作为样式添加到DOM中(style-loader在前)
        // webpack使用多个loader时，从右向左读
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      }, 
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 当加载的图片小于limit时，会将图片编译成base64字符串的形式
              // 当加载的图片大于limit时，需要使用file-loader模块进行加载
              // 一般limit值为8k，也就是8192
              limit: 9500,
              name:'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        // 排除node_modules文件夹的内容，不做转换
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
