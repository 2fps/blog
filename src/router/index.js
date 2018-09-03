import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/frontend',
    component: (resolve) => require(['../components/page/frontend.vue'], resolve),
    children: [{
        path: '/index',
        name: 'index',
        component: (resolve) => require(['../components/page/index.vue'], resolve)
    }]
}]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})