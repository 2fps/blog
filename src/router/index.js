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
        path: '/index',     // 默认主页
        name: 'index',
        component: (resolve) => require(['../components/page/index.vue'], resolve)
    }, {
        path: '/aboutMe',   // 关于我
        name: 'index',
        component: (resolve) => require(['../components/page/aboutMe.vue'], resolve)
    }, {
        path: '/article',   // 文章详细内容
        name: 'index',
        component: (resolve) => require(['../components/page/article.vue'], resolve)
    }, {
        path: '/html5',   // 文章详细内容
        name: 'index',
        component: (resolve) => require(['../components/page/article.vue'], resolve)
    }, {
        path: '/tags',
        component: (resolve) => require(['../components/page/index.vue'], resolve)
    }, {
        path: '/catalog',
        component: (resolve) => require(['../components/page/index.vue'], resolve)
    }, {
        path: '/classify',
        component: (resolve) => require(['../components/page/index.vue'], resolve)
    }]
}, {
    path: '/login',
    component: (resolve) => require(['../components/page/login.vue'], resolve)
}, {
    path: '/manager',
    component: (resolve) => require(['../components/page/manager.vue'], resolve),
    children: [{
        path: '/overview',
        name: 'overview',
        component: (resolve) => require(['../components/page/overview.vue'], resolve)
    }]
}]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})