import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
  	host: 'http://localhost:8081',
  	key: '123hiuiewrwersddf',
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
