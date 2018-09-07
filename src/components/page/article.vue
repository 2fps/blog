<template>
    <article class="article">
        <header>
            <h1>1111111111111</h1>
            <div>
                <i class="fa fa-calendar"></i>
                <span class="time">2018-09-23</span>&nbsp;
                <i class="fa fa-commenting-o"></i>
                <span class="time">111 Comment</span>&nbsp;
                <i class="fa fa-eye"></i>
                <span class="time">233 Views</span>&nbsp;
                <i class="fa fa-thumbs-o-up"></i>
                <span class="time">324 Times</span>
            </div>
        </header>
        <div class="article-content">
            <p>123</p>
        </div>
        <div class="article-pay">
            <i class="fa fa-usd"></i>
            <span>打赏一下</span>
        </div>
        <div>

        </div>
    </article>
</template>

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