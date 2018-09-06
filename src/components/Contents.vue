<template>
    <div>
        <el-card class="search-title-box" :body-style="{ padding: '0px' }">
            <div style="padding: 14px;">
            <h3 class="content-title">
                <a>标签目录：AngularJS1.x</a>
            </h3>
            </div>
        </el-card>
        <div v-for="da in articles" :id="da.id">
            <contentlogo :article="da"></contentlogo>
        </div>
        <div class="content-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentChange"
                :pager-count="5"
                :page-size="5"
                :total="100">
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
            articles: []
        }
    },
    methods: {
        currentChange() {
            alert();
        },
        getArticles: function() {
            let me = this;

            this.$http.get('/api/articles').then(function(info) {
                me.articles = info.data.articles;
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