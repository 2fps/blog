import Vue from 'vue'
import vuex from 'vuex'

import config from './modules/config'
import article from './modules/article'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        config,
        article
    }
})