<template>
    <div class="navbar-box">
        <div class="navbar-detail">
            <router-link to="/index">前端驿站</router-link>
        </div>
        <div class="navbar-user">
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    Hi,
                    <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>setting</el-dropdown-item>
                    <el-dropdown-item>登出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<style lang="less" scoped>
.navbar-box {
    color: #fff;
    background-color: #222831;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    .navbar-detail {
        float: left;
        color: #fff;
    }
    .navbar-user {
        cursor: pointer;
        float: right;
        padding: 0 20px;
    }
}
</style>
