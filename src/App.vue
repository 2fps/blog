<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
/* import NavBar from './components/NavBar'
// import Content from './components/Content'
import ContentLogo from './components/ContentLogo'
import GlobalSearch from './components/GlobalSearch'
import PersonIntro from './components/PersonIntro'
import Tags from './components/Tags'
import SubjectCatalog from './components/SubjectCatalog'
import DocClassify from './components/DocClassify'

export default {
  name: 'app',
  components: {
    'navbar': NavBar,
    'contentlogo': ContentLogo,
    'globalsearch': GlobalSearch,
    'personintro': PersonIntro,
    'tags': Tags,
    'subjectcatalog': SubjectCatalog,
    'docclassify': DocClassify
    // 'content': Content
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
} */
</script>

<style lang="less">
body, html {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  text-decoration: none !important;
}
a:link, a:visited {
  color: rgb(76, 76, 76);
  text-decoration: none !important;
}
a:hover, a:active {
  color: rgb(76, 76, 76);
  text-decoration: none !important;
}

.el-header {
  background-color: rgb(34, 34, 34);
}
</style>
