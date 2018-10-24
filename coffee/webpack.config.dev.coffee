merge = require('webpack-merge')
baseConfig = require('./webpack.config.base.js')

module.exports = merge baseConfig,{
  mode: 'development'
  # devtool: 'source-map',
  devtool: 'inline-source-map',
  output:
    # devtoolModuleFilenameTemplate: '../[absolute-resource-path]'
    devtoolModuleFilenameTemplate: '../lib/[resource-path]'
  }