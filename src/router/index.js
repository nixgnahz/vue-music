import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/components/User.vue'
import Rank from '@/components/Rank.vue'
import Recommend from '@/components/Recommend.vue'
import Search from '@/components/Search.vue'
import Singer from '@/components/Singer.vue'
import User from '@/components/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
