<template>
    <div>
        <el-menu default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            background-color="#222831"
            text-color="#fff"
            :unique-opened="true"
            :router="true"><!--  -->
            <el-menu-item index="/overview">
                <i class="fa fa-cog fa-lg"></i>&nbsp;
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="fa fa-cogs fa-lg"></i>&nbsp;
                    <span slot="title">设置</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/convention">常规</el-menu-item>
                    <el-menu-item index="1-2">阅读</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>



<style>
</style>

<script>
  export default {
    data() {
        return {
            isCollapse: false        // 控制室完整还是只有图标
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
  }
</script>