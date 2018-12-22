// 存放个人配置信息等
const state = {
    name: '',       // 右侧用户信息中显示的用户名
    words: '',      // 右侧用户信息中显示的一段话
    imgSrc: '',     // 右侧用户信息中图片的路径
    siteName: '',   // 站点名
    siteUrl: '',    // 站点 url
    subTitle: '',   // 副标题
    numInpage: 10,  // 一页多少个文章
    // 标签相关
    tags: [/* {
        name: '显示名称',
        alias: '别名',
        nums: '该名称共计数量'
    } */],

    // 分类目录
    classifyMenu: [/* {
        name: '分类名称',
        alias: '别名',
        nums: '该分类共计数量'
    } */],
    // 文档归类
    classifyMenu: [/* {
        year: '分类名称',
        month: '',
        day: '',
        hour: '',
        minute: '',
        second: '',
        alias: '别名',
        nums: '该分类共计数量'
    } */],
}

//getter 抛出去的数据
const getters = {
    /* // 参数列表state指的是state数据
    getCityFn(state){
        return state.city;
    } */
}

//action 异步的操作
const actions = {}

//mutation
const mutations = {
    setWebsiteInfo: function(state, data) {
        state.siteName = data.siteName;
        state.name = data.name;
        state.words = data.words;
        state.imgSrc = data.profileUrl;
        state.numInpage = data.numInpage;
    },
    setTags: function() {

    }
}

export default {
    state,
    mutations,
    actions,
    getters
}