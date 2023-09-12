const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: config => {
  //   // config.plugin('module-federation-plugin')
  //   //   .use(require('webpack').container.ModuleFederationPlugin, [
  //   //     {
  //   //       name: 'base_app',
  //   //       remotes: {
  //   //         childApp: 'childApp@http://121.36.3.191/child_app/remoteEntry.js'
  //   //       },
  //   //       shared: {
  //   //         'view-design': {
  //   //           singleton: true,
  //   //         },
  //   //         'echarts': {
  //   //           singleton: true,
  //   //         },
  //   //       }
  //   //     }
  //   //   ])
  // },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, './src/assets/styles/mixins.less')]
    }
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
