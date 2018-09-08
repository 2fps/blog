import Vue from 'vue'
import vuex from 'vuex'

import config from './modules/config.js'

Vue.use(vuex)

export default new vuex.Store({
    modules: {
        config
    }
})