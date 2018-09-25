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
    }, {
        path: '/search',
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
    }, {
        path: '/convention',
        name: 'convention',
        component: (resolve) => require(['../components/page/convention.vue'], resolve)
    }, {
        path: '/reader',
        name: 'reader',
        component: (resolve) => require(['../components/page/reader.vue'], resolve)
    }, {
        path: '/allArticles',
        name: 'allArticles',
        component: (resolve) => require(['../components/page/allArticles.vue'], resolve)
    }, {
        path: '/writeArticle',
        name: 'writeArticle',
        component: (resolve) => require(['../components/page/writeArticle.vue'], resolve)
    }, {
        path: '/allCatalog',
        name: 'allCatalog',
        component: (resolve) => require(['../components/page/allCatalog.vue'], resolve)
    }, {
        path: '/allTags',
        name: 'allTags',
        component: (resolve) => require(['../components/page/allTags.vue'], resolve)
    }]
}]

export default new VueRouter({
    routes: routes,
    mode: 'history'
})