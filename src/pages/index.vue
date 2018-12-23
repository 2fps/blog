<template>
    <el-container>
        <el-header>
            <!-- 导航栏 -->
            <navbar></navbar>
        </el-header>
        <el-row :gutter="10" class="font-content">
        <el-col :xs="24" :sm="14" :md="16" :lg="16" :xl="16">
            <!-- 主内容区，根据路由进行切换 -->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-col>
        <el-col :xs="0" :sm="10" :md="8" :lg="8" :xl="8">
            <!-- 右侧区域 -->
            <personintro></personintro>
            <globalsearch></globalsearch>
            <tags></tags>
            <subjectcatalog></subjectcatalog>
            <!-- <docclassify></docclassify> -->
        </el-col>
        </el-row>
        <el-footer height="180px">
            <!-- 底部 footer 区域 -->
            <foot></foot>
        </el-footer>
    </el-container>
</template>


<script>
import NavBar from '../components/NavBar'
import GlobalSearch from '../components/GlobalSearch'
import PersonIntro from '../components/PersonIntro'
import Tags from '../components/Tags'
import SubjectCatalog from '../components/SubjectCatalog'
import DocClassify from '../components/DocClassify'
import Foot from '../components/Foot'

export default {
    name: 'index',
    components: {
        'navbar': NavBar,
        'globalsearch': GlobalSearch,
        'personintro': PersonIntro,
        'tags': Tags,
        'subjectcatalog': SubjectCatalog,
        'docclassify': DocClassify,
        'foot': Foot
    },
    methods: {
        getWebSiteInfo() {

        }
    },
    mounted: function() {
        this.$http.get('/api/website').then((info) => {
            let config = info.data.data;

            this.$store.commit('setWebsiteInfo', {
                siteName: config.siteName,
                subTitle: config.subTitle,
                siteUrl: config.siteUrl,
                name: config.name,
                words: config.words,
                imgSrc: config.imgSrc,
                numInpage: config.numInpage,
                CDNPath: config.CDNPath,
                webRecord: config.webRecord
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