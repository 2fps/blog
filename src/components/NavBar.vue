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
        <el-menu-item index="1">
          <router-link to="/aboutMe">关于我</router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的</template>
          <router-link to="/CSS">
            <el-menu-item index="2-1">CSS</el-menu-item>
          </router-link>
          <router-link to="/JavaScript">
            <el-menu-item index="2-2">JavaScript</el-menu-item>
          </router-link>
          <router-link to="/original">
            <el-menu-item index="2-3">纯原创</el-menu-item>
          </router-link>
          <router-link to="/download">
            <el-menu-item index="2-4">资源下载</el-menu-item>
          </router-link>
        </el-submenu>
        <el-menu-item index="3">
          <router-link to="/index" @click.native="backToIndex()">主页</router-link>
        </el-menu-item>
        <el-menu-item index="4"><a target="_blank">
          <router-link to="/manage">管理</router-link>
        </a></el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '3'
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        backToIndex() {
            this.$store.commit('setMode', {
                mode: '',
                modeContent: ''
            })
        }
    }
}
</script>

<style scoped lang="less">
.el-menu {
  max-width: 1080px;
  margin: 0 auto;
}

</style>