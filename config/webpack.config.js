const { override, addWebpackAlias, fixBabelImports } = require('customize-cra')
const alias = require('./alias')

module.exports = override(
  addWebpackAlias(alias.resolve.alias),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
)
