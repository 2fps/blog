<template>
    <el-container>
      <el-header>
        <navbar></navbar>
      </el-header>
      <el-row :gutter="10" class="font-content">
        <el-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16">
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-col>
        <el-col :xs="0" :sm="10" :md="8" :lg="8" :xl="8">
          <personintro></personintro>
          <globalsearch></globalsearch>
          <tags></tags>
          <subjectcatalog></subjectcatalog>
          <!-- <docclassify></docclassify> -->
        </el-col>
      </el-row>
      <el-footer height="180px">
        <foot></foot>
      </el-footer>
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
import Foot from '../Foot'

export default {
    name: 'app',
    components: {
        'navbar': NavBar,
        'contentlogo': ContentLogo,
        'globalsearch': GlobalSearch,
        'personintro': PersonIntro,
        'tags': Tags,
        'subjectcatalog': SubjectCatalog,
        'docclassify': DocClassify,
        'foot': Foot
        // 'content': Content
    },
    methods: {
        getWebSiteInfo() {

        }
    },
    mounted: function() {
        this.$http.get('/api/website').then((info) => {
            let config = info.data;

            this.$store.commit('setWebsiteInfo', {
                webName: config.webName,
                name: config.author,
                words: config.words,
                profileUrl: config.profileUrl,
                numInpage: config.numInpage
            })
        });
    }
}
</script>

<style lang="less">
.el-footer {
  background-color: rgb(34, 40, 49);
}
.font-content {
  width: 100%;
  max-width: 1200px;
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>