import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
const store = new Vuex.Store({
  state: {
  	host: 'http://localhost:8081',
  	key: '123hiuie&%$rwersddf',
    token: null,
    userName:"",
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
