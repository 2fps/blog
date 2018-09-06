/**
 * 内容缩略显示组件
 */

<template>
  <el-card class="box-card" shadow="hover" :body-style="{ padding: '0px' }">
    <div style="padding: 14px;">
      <h1 class="content-title">
        <a>{{ article.title }}</a>
      </h1>
      <div class="text item">
          {{ article.summary }}
      </div>
      <div class="bottom clearfix">
        <span class="time">{{ article.releaseTime }}</span>&nbsp;
        <span class="time">{{ article.catalogs }}</span>&nbsp;
        <span class="time">{{ article.commentsNum }}</span>&nbsp;
        <span class="time">{{ article.viewsNum }}</span>&nbsp;
        <span class="time">{{ article.likeNum }}</span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
    props: {
        article: Object
    },
    data() {
        return {
            releaseTime: new Date(),
            mainType: '前端开发',
            commentNum: 2,
            viewNum: 122,
            likeNum: 9
        };
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