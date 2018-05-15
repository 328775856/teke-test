import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../view/Home')), 'lesson/home')
const Detail = r => require.ensure([], () => r(require('../view/Detail')), 'lesson/detail')
const Series = r => require.ensure([], () => r(require('../view/Series')), 'lesson/series')
const Single = r => require.ensure([], () => r(require('../view/Single-course')), 'lesson/single-course')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue/',
  routes: [
    {
      path: '/lesson'
      // name: 'Home',
      // component: Home
    },
    {
      path: '/lesson/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/lesson/series',
      name: 'Series',
      meta: {
        title: '系列课详情'
      },
      component: Series
    },
    {
      path: '/lesson/single-course',
      nmae: 'Single',
      meta: {
        title: '单课详情'
      },
      component: Single
    },
    {
      path: '/lesson/home',
      name: 'Home',
      component: Home
    }
  ]
})
