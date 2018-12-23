<template>
    <div>
        <el-card class="search-title-box" :body-style="{ padding: '0px' }" v-if="$store.state.article.mode">
            <div style="padding: 14px;">
            <h3 class="content-title">
                <a>{{ title }}</a>
            </h3>
            </div>
        </el-card>
        <div v-for="(da, index) in articles" :key="index">
            <contentlogo :article="da"></contentlogo>
        </div>
        <div class="content-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentChange"
                :current-page="currentPage"
                :pager-count="5"
                :page-size="pageSize"
                :total="articelLength">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import ContentLogo from './ContentLogo'

export default {
    components: {
        'contentlogo': ContentLogo
    },
    data() {
        return {
            articles: [],
            articelLength: 0,
            currentPage: 1,     // 当前第几页
            from: 0             // 第一篇文章的开始位置
        }
    },
    computed: {
        title: function() {
            let params = '';

            if ('tag' === this.$store.state.article.main) {
                // 点击了详细标签，左侧显示对应的内容
                params += '?tags=' + this.$store.state.article.modeContent;
            } else if ('catalog' === this.$store.state.article.main) {
                params += '?catalogs=' + this.$store.state.article.modeContent;
            } else if ('search' === this.$store.state.article.main) {
                params += '?search=' + this.$store.state.article.modeContent;
            }

            this.getArticles(params);

            return this.$store.state.config.modeDes + ':' + this.$store.state.config.con;
        },
        pageSize: function() {
            return this.$store.state.config.numInpage;
        }
    },
    methods: {
        currentChange(curPage) {
            this.currentPage = curPage;
            var oParam = {
                from: (this.currentPage - 1) * this.$store.state.config.numInpage,
                offset: this.$store.state.config.numInpage
            },
                sParam = '?from=' + oParam.from + '&offset=' + oParam.offset;

            if ('tag' === this.$store.state.article.main) {
                // 点击了详细标签，左侧显示对应的内容
                sParam += 'tags=' + this.$store.state.article.modeContent;
            } else if ('catalog' === this.$store.state.article.main) {
                sParam += 'catalogs=' + this.$store.state.article.modeContent;
            } else if ('search' === this.$store.state.article.main) {
                sParam += '?search=' + this.$store.state.article.modeContent;
            }

            this.getArticles(sParam);
        },
        // 默认获取所有按时间排序的文章
        getArticles (params) {
            // 处理下undefined等其他异常
            params = params || '';

            this.$http.get('/api/articles' + params).then((info) => {
                this.articles = info.data.data;
                this.articelLength = info.data.data.count;
            });
        }
    },
    mounted() {
        this.getArticles();
    }
}
</script>

<style lang="less">
.search-title-box {
    margin-bottom: 25px;
    text-align: left;
    font-weight: normal;
}
.content-pagination {
    margin: 50px 0 30px;
}
</style>