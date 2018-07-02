// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import Index from './index'
import router from './router'
import axios from 'axios'
import '@/assets/fonts/iconfont.css'
import api from '@/assets/js/api'
import wx from 'weixin-js-sdk'
import app from '@/assets/js/app'

// import '@/assets/css/font.css'
import adaptor from '@/assets/js/screen-adaptor'

adaptor(750, (screen) => {
  return Math.min(screen.width, screen.height * 0.8)
})

Vue.config.productionTip = false

Vue.use(router);

// Vue.use(Vuex)
Vue.prototype.axios = axios
Vue.prototype.api = api
Vue.prototype.wx = wx
Vue.prototype.app = app

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: {Index},
  template: '<index/>'
});

(function () {
  let mta = document.createElement("script");
  mta.src = "https://pingjs.qq.com/h5/stats.js?v2.0.4";
  mta.setAttribute("name", "MTAH5");
  mta.setAttribute("sid", app.config.mtaAppId);
  let s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(mta, s);
})();
