/**
 * Author: LyonWong
 * Date: 2018-03-24
 */

const config = require('../../config')
const app = {
  env: () => {
    if (window.__wxjs_environment === 'miniprogram') {
      return 'wxa'
    }
    if (navigator.userAgent.match(/Wechat/)) {
      return 'wxm'
    }
    return undefined
  },
  config: config,
  signIn: () => {
    window.location.href = '/sign-in?callbackURI=' + encodeURIComponent(window.location.href)
  },
  setTitle: (title) => {
    document.title = `易灵微课-${title}`
  },
  linkToAssets: (path) => {
    let prefix = config.assetsPreUrl.indexOf('http') === 0 ? '' : location.origin
    return prefix + config.assetsPreUrl + path
  },
  linkToStudent: (path) => {
    return config.studentPreUrl+path
  },
  disableBodyScroll: () => {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow='hidden'
  },
  enableBodyScroll: () => {
    document.body.style.overflow = 'visible'
    document.documentElement.style.overflow='visible'
  }
};

export default app
