<template>
    <el-container class="container">
        <el-header>
            <navbar></navbar>
        </el-header>
        <el-container>
            <el-aside class="manager-left">
                <managemenu></managemenu>
            </el-aside>
            <el-container>
                <el-main style="background-color: #F1F1F1">
                    <router-view></router-view>
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
import Navbar from '../manage/Navbar'
import Menu from '../manage/Menu'

export default {
    name: 'aa',
    components: {
        'navbar': Navbar,
        'managemenu': Menu
    }
}
</script>

<style lang="less" scoped>
.container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .manager-left {
        background-color: rgb(34, 40, 49);
        width: 200px !important;
    }
}
.el-header {
    padding: 0px;
    height: auto !important;
}
</style>