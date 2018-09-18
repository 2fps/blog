import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './assets/less/main.css'

import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'

import store from './store'

Vue.use(ElementUI)
Vue.use(VueQuillEditor)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App />',
    render: h => h(App)
})

Vue.prototype.$http = axios