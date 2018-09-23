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
                :pager-count="5"
                :page-size="5"
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
            articelLength: 0
        }
    },
    computed: {
        title: function() {
            return this.$store.state.article.mode + ':' + this.$store.state.article.modeContent;
        }
    },
    methods: {
        currentChange() {
            alert();
        },
        getArticles: function() {
            let me = this;

            this.$http.get('/api/articles').then(function(info) {
                me.articles = info.data.list;
                me.articelLength = info.data.count;
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