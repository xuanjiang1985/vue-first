import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import my from './components/my'

Vue.use(Vuex)

Vue.config.productionTip = false;
Vue.component('my-com',my)

const store = new Vuex.Store({
  state: {
  	host: 'http://localhost:8081',
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
