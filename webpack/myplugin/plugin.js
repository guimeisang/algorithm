class Plugin {
  // 在插件函数的 prototype 上定义一个 `apply` 方法，以 compiler 为参数。
  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.emit.tapAsync('myplugin', (compilation, callback) => {
        // 获取打包后的 js 文件名
        const filename = compiler.options.output.filename
        // 生成一个 index.html 并引入打包后的 js 文件
        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <script src="${filename}"></script>
        </head>
        <body></body>
        </html>`
        // 所有处理后的资源都放在 compilation.assets 中
        // 添加一个 index.html 文件
        compilation.assets['index.html'] = {
            source: function () {
                return html
            },
            size: function () {
                return html.length
            }
        }

        // 再执行一些异步操作
        setTimeout(function() {
          console.log('异步任务完成....')
          // 功能完成后调用 webpack 提供的回调
          callback()
        }, 3000)

        // // 功能完成后调用 webpack 提供的回调
        // callback()
      }
    );
  }
}

module.exports = Plugin