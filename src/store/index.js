import Vue from 'vue'
import vuex from 'vuex'

import config from './modules/config'
import article from './modules/article'
import writeArticle from './modules/writeArticle'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        config,
        article,
        writeArticle
    }
})