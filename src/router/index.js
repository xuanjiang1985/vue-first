import Vue from 'vue'
import Router from 'vue-router'
import 'whatwg-fetch'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
        path: '*',
        component: NotFound 
    }
  ]
})
