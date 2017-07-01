import Vue from 'vue'
import App from './App'
import router from './router'
import my from './components/my'

Vue.config.productionTip = false;
Vue.component('my-com',my)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
