/**
 * 内容缩略显示组件
 */

<template>
  <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
    <div style="padding: 14px;">
      <h1 class="content-title">
        <router-link v-bind:to="'/article'" @click.native="bindData">{{ article.title }}</router-link>
      </h1>
      <div class="text item">
          {{ article.subTitle }}
      </div>
      <div class="bottom clearfix">
        <i class="fa fa-calendar"></i>
        <span class="time">{{ article.date }}</span>&nbsp;
        <i class="fa fa-folder-open-o"></i>
        <span class="time">{{ article.catalogs.toString() }}</span>&nbsp;
        <i class="fa fa-commenting-o"></i>
        <span class="time">{{ article.commentNum }} Comment</span>&nbsp;
        <i class="fa fa-eye"></i>
        <span class="time">{{ article.viewNum }} Views</span>&nbsp;
        <i class="fa fa-thumbs-o-up"></i>
        <span class="time">{{ article.likeNum }} Times</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
    props: ['article'],
    data() {
        return {

        };
    },
    methods: {
        bindData() {
            this.$store.commit('setReadArticle', {
                content: this.article.content,
                title: this.article.title,
                subTitle: this.article.subTitle,
                date: this.article.date,
                catalog: this.article.catalogs.toString(),
                commentNum: this.article.commentNum,
                comments: [],
                likeNum: this.article.likeNum,
                viewNum: this.article.viewNum
            })
        }
    }
}
</script>

<style scoped lang="less">
.content-title {
  font-size: 25px;
  & > a {
    cursor: pointer;
  }
  & > a:hover {
      color: #5BC0EB;
      transition: 0.5s;
      -webkit-transition: 0.5s;
      -o-transition: 0.5s;
      -moz-transition: 0.5s;
  }
}
.text {
  font-size: 14px;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
    text-align: left;
    margin-bottom: 25px;
}
</style>