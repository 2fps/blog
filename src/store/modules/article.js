// 存放文章的配置信息等
const state = {
    numOnePage: 10,     // 每页文章条数
    articles: [],       // 当前页文章内容，前端不缓存，后期改
    mode: '',           // 当前是什么模式，如查看文章，search
    modeContent: '',    // 模式下对应的内容，受mode控制
    nowArt: {           // 查看文章时，对应的详细信息
        title: '',
        // ...
        content: '',
        comments: []    // 评论
    }
}

const getters = {}

const actions = {}

const mutations = {
    setMode: function(state, data) {
        state.mode = data.mode
        state.modeContent = data.modeContent
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}