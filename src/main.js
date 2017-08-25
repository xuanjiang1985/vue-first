import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

Vue.use(Vuex)

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

// router interceptors
router.beforeEach((to, from, next) => {
   if (to.matched.some(res => res.meta.requireAuth)) {
     if (store.state.token != null ) {// 判断是否登录
       next()
     } else {
       next({
         path: '/login',
         query: {redirect: to.fullPath}
       })
     }
   } else {
     next()
   }
 })

// http request interceptors 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token != null) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = `Bearer ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
});

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401: 
                    // 返回 401 清除token信息并跳转到登录页面
                    localStorage.removeItem('token');
                    store.state.token = null;
                    router.replace({
                        path: '/login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });

const store = new Vuex.Store({
  state: {
  	host: 'http://localhost:8081',
  	key: '123hiuie&%$rwersddf',
    token: localStorage.getItem('token'),
    userName: localStorage.getItem('userName'),
    userId: localStorage.getItem('userId'),
    userHeader: localStorage.getItem('userHeader'),
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
