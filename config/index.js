'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const local = require('./local')

function argv(name) {
  let pattern = new RegExp(`${name}=(\\S+)`)
  for (let i in process.argv) {
    let res = pattern.exec(process.argv[i])
    if (res) {
      return res[1]
    }
  }
  return null
}

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: local.subDir || 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: local.api || 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '\\?': '.json?',
          '$': '.json'
        },
        onProxyReq(proxyReq, req, res) {
          // 本地配置
          // proxyReq.setHeader('X-SESS', 'U5acdd14c33dd6-100595b08c0af9f0523.70599575');
          // let ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0) Gecko/20100101 Firefox/60.0'
          // proxyReq.setHeader('User-Agent', ua);
        },
        onProxyRes(proxyRes, req, res) {
          proxyRes.headers['Access-Control-Request-Origin'] = '*';
          proxyRes.headers['Access-Control-Request-Headers'] = '*';
        }
      }
    },

    // Various Dev Server settings
    host: local.host || 'localhost', // can be overwritten by process.env.HOST
    port: local.port || 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: local.subDir || 'static',
    // assetsPublicPath: utils.parseCommandArgv('assets') || '/',
    assetsPublicPath: argv('assets') || local.assets || '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
