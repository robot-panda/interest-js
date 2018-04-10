var path = require('path')
var webpack = require('webpack')

var nodeConfig = {
  target: 'node',
  node: { process: false },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

module.exports = [
  // Node specific Builds (to be used on server side environment)
  // CommonJS is the Package Default. If you want to use other build,
  // just specify on your webpack configuration as an Alias
  createConfig('commonjs2', 'commonjs2.node', nodeConfig),
  createConfig('umd', 'umd.node', nodeConfig),
  createConfig('amd', 'amd.node', nodeConfig),

  // Other Browser Builds (using umd, amd or commonjs2 modules)
  createConfig('commonjs2', 'commonjs2.browser'),
  createConfig('umd', 'umd.browser'),
  createConfig('amd', 'amd.browser'),

  // Finally, the Global Variable Build - Always a Browser build
  createConfig('var', 'var')
]
function createConfig (libraryTarget, filename, config = {}) {
  return Object.assign({}, {
    entry: './src/index.js',
    output: {
      filename: 'monolythic.' + filename + '.js',
      library: 'monolythic',
      libraryTarget: libraryTarget
    },
    mode: 'development',
    resolve: {
      alias: {
        '@modules': path.resolve(__dirname, 'src/modules'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@facades': path.resolve(__dirname, 'src/models/facades')
      }
    }
  }, config)
}
