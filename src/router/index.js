import Vue from 'vue'
import Router from 'vue-router'
import Rank from 'components/rank/rank'
import TopList from 'components/top-list/top-list'
import Recommend from 'components/recommend/recommend'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend',
      component: Recommend
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
