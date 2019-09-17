const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
  },
  css: {
    extract: false,
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        data: `@import "packages/index.scss";`
      }
    },
  },
  chainWebpack: config=> {
    config.resolve.alias
      .set('~', path.resolve('packages'))
  },
}
