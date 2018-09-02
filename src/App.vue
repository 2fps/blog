<template>
  <div id="app">
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <contentlogo></contentlogo>
          </el-main>
        </el-container>
        <el-aside width="400px">
          <personintro></personintro>
          <globalsearch></globalsearch>
          <tags></tags>
          <subjectcatalog></subjectcatalog>
          <docclassify></docclassify>
        </el-aside>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
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
}
</script>

<style scoped lang="less">
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

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
