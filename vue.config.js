const autoprefixer = require('autoprefixer') // 自动添加浏览器兼容前缀
// const pxtorem = require('postcss-pxtorem') // 添加px自动转换rem
module.exports = {
  // 基本路径
  publicPath: './', // 相对路径
  // 构建时输出目录
  outputDir: 'dist',
  assetsDir: 'static', // 静态资源打包路径修改
  // 文件名哈希
  filenameHashing: true,
  // 是否在保存时使用 `eslint-loader` 进行检查
  lintOnSave: true,
  chainWebpack: config => {
    // 这里是对环境的配置，不同环境对应不同的BASE_URL，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      args[0]['process.env'].BASE_URL = JSON.stringify(process.env.BASE_URL)
      return args
    })
  },
  css: {
    loaderOptions: {
      sass: {
        // eslint-disable-next-line quotes
        prependData: `@import "@/style/global.scss";`
      },
      postcss: {
        plugins: [
          autoprefixer()
        ]
      }
    }
  }
}
