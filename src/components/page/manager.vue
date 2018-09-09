<template>
    <el-container>
        <el-header>
            <navbar></navbar>
        </el-header>
        <el-container>
            <el-aside>
                <qmenu></qmenu>
            </el-aside>
            <el-container>
                <el-main>
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
        'qmenu': Menu
    }
}
</script>

<style lang="less" scoped>
.el-header {
    padding: 0px;
    height: auto !important;
}
</style>