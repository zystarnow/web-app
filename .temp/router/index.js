import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Home from '@/views/home.vue'
import Client from '@/views/client/list.vue'
import ClientAdd from '@/views/client/add.vue'
import ClientDetail from '@/views/client/detail.vue'
import Visit from '@/views/visit/list.vue'
import VisitAdd from '@/views/visit/add.vue'
import VisitDetail from '@/views/visit/detail.vue'
import My from '@/views/my/index.vue'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/visit',
      name: 'Visit',
      component: Visit
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/client/add',
      component: ClientAdd,
      name: 'ClientAdd'
    },
    {
      path: '/client/detail',
      name: 'ClientDetail',
      component: ClientDetail
    },
    {
      path: '/visit/add',
      component: VisitAdd,
      name: 'VisitAdd'
    },
    {
      path: '/visit/detail',
      name: 'VisitDetail',
      component: VisitDetail
    }
  ]
})
