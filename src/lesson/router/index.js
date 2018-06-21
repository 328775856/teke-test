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
  ],
  scrollBehavior (to, from, savedPosition) {
    // 如果你的連結是帶 # 這種
    // to.hash 就會有值(值就是連結)
    // 例如 #3
    if (to.hash) {
      return {
        // 這個是透過 to.hash 的值來找到對應的元素
        // 照你的 html 來看是不用多加處理這樣就可以了
        // 例如你按下 #3 的連結，就會變成 querySelector('#3')，自然會找到 id = 3 的元素
        selector: to.hash
      }
    }
  }
})
