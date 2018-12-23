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
import ContentLogo from './ContentLogo';

const queryTrans = {
    tags: '标签目录',
    catalog: '分类目录',
    search: '搜索'
};

export default {
    components: {
        'contentlogo': ContentLogo
    },
    data() {
        return {
            articles: [],
            articelLength: 0,
            mode: '',
            modeCon: '',
            currentPage: 1,     // 当前第几页
            from: 0             // 第一篇文章的开始位置
        }
    },
    computed: {
        // 顶部提示
        title: function() { 
            return queryTrans[this.mode] + ':' + this.modeCon;
        },
        pageSize: function() {
            return this.$store.state.config.numInpage;
        }
    },
    watch: {
        $route(to, from ){
            let query = to.query;

            // 
            let queryName = Object.keys(query)[0];

            // switch
            this.mode = queryName;
            this.modeCon = query[queryName];

            // 重新开始查询
            this.getArticles();
        }
    },
    methods: {
        currentChange(curPage) {
            if (curPage) {
                this.currentPage = curPage;
            }

            this.getArticles();
        },
        // 默认获取所有按时间排序的文章
        getArticles () {
            // 获取查询参数
            let params = this.combineQuery();

            this.$http.get('/api/articles' + params).then((info) => {
                this.articles = info.data.data.sort(function(ar1, ar2) {
                    if (ar1.articleId > ar2.articleId) {
                        return false;
                    } else {
                        return true;
                    }
                });
                this.articelLength = info.data.data.length;
            });
        },
        combineQuery() {
            var oParam = {
                from: (this.currentPage - 1) * this.$store.state.config.numInpage,
                offset: this.$store.state.config.numInpage
            },
                sParam = '?from=' + oParam.from + '&end=' + (oParam.from + oParam.offset);

            if ('tag' === this.mode) {
                // 点击了详细标签，左侧显示对应的内容
                sParam += 'tags=' + this.modeCon;
            } else if ('catalog' === this.mode) {
                sParam += 'catalogs=' + this.modeCon;
            } else if ('search' === this.mode) {
                sParam += '?search=' + this.modeCon;
            }

            return sParam;
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