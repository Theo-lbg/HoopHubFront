const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    hot: true,
    open: true
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json']
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set('@', require('path').resolve(__dirname, 'src'))
    
    // Définir les feature flags Vue.js pour éviter les warnings
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0], {
        '__VUE_OPTIONS_API__': 'true',
        '__VUE_PROD_DEVTOOLS__': 'false',
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': 'false'
      })
      return definitions
    })
  },
  pwa: {
    name: 'HoopHub',
    themeColor: '#667eea',
    msTileColor: '#667eea',
    manifestOptions: {
      background_color: '#667eea'
    }
  }
})
