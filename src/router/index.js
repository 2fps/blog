import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: (resolve) => require(['../components/page/index.vue'], resolve)
}]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})