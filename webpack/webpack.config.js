const path = require('path')
const Plugin = require('./myplugin/plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Plugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
            {
              loader: path.resolve('./myloader/loader.js'),
            },
            {
              loader: path.resolve('./myloader/asyncLoader.js'),
            },
        ]
      }
    ]
  }
}