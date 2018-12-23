<template>
    <article class="article">
        <header>
            <h1>{{ title }}</h1>
            <div>
                <i class="fa fa-calendar"></i>
                <span class="time">{{ publishTime }}</span>&nbsp;
                <i class="fa fa-commenting-o"></i>
                <span class="time">{{ commentNums }}</span>Comment&nbsp;
                <i class="fa fa-eye"></i>
                <span class="time">{{ readNums }}</span>Views&nbsp;
                <i class="fa fa-thumbs-o-up"></i>
                <span class="time">{{ likeNums }}</span>Times
            </div>
        </header>
        <div class="article-content">
            {{ contents }}
        </div>
        <div class="article-pay">
            <i class="fa fa-usd"></i>
            <span>打赏一下</span>
        </div>
        <div>

        </div>
    </article>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            contents: '',
            publishTime: '',
            commentNums: 0,
            readNums: 0,
            likeNums: 0
        }
    },
    methods: {
        getArticleContent(articleId) {
            let params = 'articleId=' + articleId;

            this.$http.get('/api/articles?' + params).then((info) => {
                this.contents = info.data.data.contents;
                this.title = info.data.data.title;
                this.publishTime = info.data.data.publishTime;
                this.commentNums = info.data.data.commentNums;
                this.readNums = info.data.data.readNums;
                this.likeNums = info.data.data.likeNums;
            });
        }
    },
    mounted() {
        var articleId = this.$route.params.articleId;
        // 获取文章的详细信息
        this.getArticleContent(articleId);
    },
}
</script>

<style lang="less" scoped>
.article {
    border: 1px solid #e0e0e0;
    padding: 20px;
    & > header {
        & > h1 {
            font-size: 36px;
        }
        & > div {
            color: #777676;
            font-size: 13px;
        }
    }
    & > .article-content {
        text-align: left;
    }
    & > .article-pay {
        padding: 10px 15px;
        display: inline-block;
        border: 1px solid #E87461;
        color: #E87461;
        cursor: pointer;
        &:hover {
            color: #fff;
            background-color: #E87461;
            transition: all .5s ease;
            -webkit-transition: all .5s ease;
            -moz-transition: all .5s ease;
            -ms-transition: all .5s ease;
            -o-transition: all .5s ease;
        }
    }
}
</style>