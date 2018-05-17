// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Index from './index'
import router from './router'
import axios from 'axios'

import '@/assets/fonts/iconfont.css'
import api from '@/assets/js/api'
import wxa from '@/assets/js/wxa'

import adaptor from '@/assets/js/screen-adaptor'

adaptor(750, (screen) => {
  // return Math.min(screen.width, screen.height*0.8)
  return screen.width < screen.height ? screen.width : '750'
})

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.axios = axios
Vue.use(router)
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.filter('status', function (value) {
  if (value === 'finish') {
    value = '可回放'
  }
  if (value === 'onlive') {
    value = '开课中'
  }
  if (value === 'repose') {
    value = '未开课'
  }
return value
})
Vue.prototype.api = api
Vue.prototype.wxa = wxa

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {Index},
  template: '<index/>'
})
