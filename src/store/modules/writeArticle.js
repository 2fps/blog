// 存放文章的配置信息等
const state = {
    date: '',
    tags: [],
    catalogs: []
}

const getters = {}

const actions = {}

const mutations = {
    setDate: function(state, date) {
        state.date = date
    },
    setTags: function(state, tags) {
        state.tags = tags
    },
    setCatalogs: function(state, cata) {
        state.catalogs = cata
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}