// 存放个人配置信息等
const state = {
    name: '',       // 右侧用户信息中显示的用户名
    words: '',      // 右侧用户信息中显示的”名言“
    imgSrc: ''      // 右侧用户信息中图片的路径
}

//getter 抛出去的数据
const getters = {}

//action 异步的操作
const actions = {}

//mutation
const mutations = {
    setWebsiteInfo: function(state, data) {
        state.webName = data.webName
        state.name = data.name
        state.words = data.words
        state.imgSrc = data.profileUrl
        state.numInpage = data.numInpage
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}