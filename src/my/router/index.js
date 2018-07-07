import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../view/Home')), 'my/home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/my/home',
      alias: '/my/',
      name: 'Home',
      component: Home,
      meta: {
        title: '易灵微课-用户中心'
      }
    }
  ]
})
