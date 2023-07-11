const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('module-federation-plugin')
      .use(require('webpack').container.ModuleFederationPlugin, [
        {
          name: 'base_app',
          remotes: {
            childApp: 'childApp@http://121.36.3.191/child_app/remoteEntry.js'
          },
          shared: {
            'view-design': {
              singleton: true,
            },
            'echarts': {
              singleton: true,
            },
          }
        }
      ])
  },
  devServer: {
    proxy: {
      '/child_app': {
        target: 'http://121.36.3.191',
        changeOrigin: true,
      }
    }
  }
})
