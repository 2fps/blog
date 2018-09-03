<template>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-container>
        <el-container>
          <el-main>
            <router-view></router-view>
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
</template>


<script>
import NavBar from '../NavBar'
// import Content from './components/Content'
import ContentLogo from '../ContentLogo'
import GlobalSearch from '../GlobalSearch'
import PersonIntro from '../PersonIntro'
import Tags from '../Tags'
import SubjectCatalog from '../SubjectCatalog'
import DocClassify from '../DocClassify'

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
  }
}
</script>