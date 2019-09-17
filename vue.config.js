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
    config.module
      .rule('ts')
      .include.add('/packages')
      .end()
      .use('bable')
      .loader('bable-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      });
  },
}
