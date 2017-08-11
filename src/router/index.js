import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Content from '@/components/Content'
import Login from '@/components/Login'
import Photo from '@/components/Photo'
import Profile from '@/components/Profile'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/content',
      name: 'content',
      component: Content
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },

    { path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
        path: '*',
        component: NotFound 
    }
  ]
})
