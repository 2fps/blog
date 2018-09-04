import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

import App from './App.vue'
import router from './router'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  template: '<App />',
  render: h => h(App)
})

Vue.prototype.$http = axios