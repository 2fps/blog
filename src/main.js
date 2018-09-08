import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import store from './store'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  render: h => h(App)
})

Vue.prototype.$http = axios