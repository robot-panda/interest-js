var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    // libraryTarget: 'var',
    filename: 'bundle.js',
    library: 'Interest'
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
