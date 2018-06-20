import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('../view/Home')), 'lesson/home')
const Search = r => require.ensure([], () => r(require('../view/Search')), 'lesson/search')
const Detail = r => require.ensure([], () => r(require('../view/Detail')), 'lesson/detail')
const Series = r => require.ensure([], () => r(require('../view/Series')), 'lesson/series')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/lesson/home',
      alias: '/lesson/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lesson/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/lesson/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/lesson/series',
      name: 'Series',
      component: Series
    }
  ]
})
