import Vue from 'vue'
import Router from 'vue-router'
import Home from '@components/home/home.vue'
import BookInfo from '@components/bookInfo/bookInfo.vue'
import AppNotFound from '@components/notFound/notfound.vue'
import BorrowBooks from '@components/borrowBooks/borrowBooks.vue'
import BookManagement from '@components/booksManagement/booksMangement.vue'
import UserManagement from '@components/userManagement/userManagement.vue'

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
      path: '/borrowBooks',
      name: 'borrowBooks',
      component : BorrowBooks

    },
    {
      path: '/bookManagement',
      name: 'bookManagement',
      component : BookManagement
    },
    {
      path: '/userManagement',
      name: 'userManagement',
      component : UserManagement
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
