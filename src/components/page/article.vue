<template>
    <article class="article">
        <header>
            <h1>{{ title }}</h1>
            <div>
                <i class="fa fa-calendar"></i>
                <span class="time">{{ date }}</span>&nbsp;
                <i class="fa fa-commenting-o"></i>
                <span class="time">{{ commentNum }}</span>Comment&nbsp;
                <i class="fa fa-eye"></i>
                <span class="time">{{ viewNum }}</span>Views&nbsp;
                <i class="fa fa-thumbs-o-up"></i>
                <span class="time">{{ likeNum }}</span>Times
            </div>
        </header>
        <div class="article-content" v-html="content">
            
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
            content: '',
            date: '',
            commentNum: 0,
            viewNum: 0,
            likeNum: 0
        }
    },
    methods: {
        getNowReading() {
            var data = this.$store.state.article.nowReading;

            this.title = data.title;
            this.date = data.date;
            this.commentNum = data.commentNum;
            this.content = data.content;
            this.viewNum = data.viewNum;
            this.likeNum = data.likeNum;
        }
    },
    mounted: function() {
        this.getNowReading();
    }
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