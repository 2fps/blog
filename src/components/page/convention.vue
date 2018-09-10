<template>
    <div class="convention-box">
        <checkupdate></checkupdate>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="4" class="input-title">
                站点名称
            </el-col>
            <el-col :span="16">
                <el-input v-model="siteName" placeholder="请输入站点名称"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="4" class="input-title">
                副标题
            </el-col>
            <el-col :span="16">
                <el-input v-model="subTitle" placeholder="请输入副标题"></el-input>
            </el-col>
        </el-row>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="4" class="input-title">
                博客地址
            </el-col>
            <el-col :span="16">
                <el-input v-model="blogAddress" placeholder="请输入博客地址"></el-input>
            </el-col>
        </el-row>
        <el-r>
            <el-button type="primary" plain>确认</el-button>
        </el-r>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'

export default {
    data() {
        return {
            siteName: '',
            subTitle: '',
            blogAddress: ''
        }
    },
    components: {
        'checkupdate': CheckUpdate
    }
}
</script>

<style lang="less" scoped>
.convention-box {
    text-align: left;
    .input-title {
        height: 40px;
        line-height: 40px;
    }
}
</style>
