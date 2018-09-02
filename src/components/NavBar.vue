/**
 * 顶部的导航条
 */
<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgb(34, 34, 34)"
        text-color="rgba(255, 255, 255, 0.5)"
        active-text-color="#fff">
        <el-menu-item index="1">关于我</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的</template>
            <el-menu-item index="2-1">CSS</el-menu-item>
            <el-menu-item index="2-2">JavaScript</el-menu-item>
            <el-menu-item index="2-3">纯原创</el-menu-item>
            <el-menu-item index="2-4">资源下载</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">主页</el-menu-item>
        <el-menu-item index="4"><a target="_blank">管理</a></el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '3'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">

</style>