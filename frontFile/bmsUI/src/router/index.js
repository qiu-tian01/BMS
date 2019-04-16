import Vue from 'vue'
import Router from 'vue-router'
import Home from '@components/home/home.vue'
import BookInfo from '@components/bookInfo/bookInfo.vue'
import AppNotFound from '@components/notFound/notfound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/bookInfo',
      name: 'bookInfo',
      component: BookInfo
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: AppNotFound
    },
    {
        path: '**',
        redirect: '/not-found'
    }

  ]
})
