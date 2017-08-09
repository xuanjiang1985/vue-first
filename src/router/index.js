import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Content from '@/components/Content'
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
      path: '/content/:id',
      name: 'content',
      component: Content
    },
    {
        path: '*',
        component: NotFound 
    }
  ]
})
