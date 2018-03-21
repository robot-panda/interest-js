var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    libraryTarget: 'this',
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@facades': path.resolve(__dirname, 'src/models/facades')
    }
  }
}
