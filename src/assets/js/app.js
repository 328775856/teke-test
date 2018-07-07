/**
 * Author: LyonWong
 * Date: 2018-03-24
 */

import wx from 'weixin-js-sdk'

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
    let callback = encodeURIComponent(window.location.href)
    if (app.env() === 'wxa') {
      wx.miniProgram.navigateTo({
        url: `/page/login/index?callback=${callback}`
      })
    } else {
      window.location.href = '/sign-in?callbackURI=' + callback
    }
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
  },
  previewImageOne: (src) => {
    wx.previewImage({
      current: src,
      urls: [src]
    })
  }
};

export default app
