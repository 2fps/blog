<template>
    <div class="convention-box">
        <checkupdate></checkupdate>
        <h3>设置</h3>
        <h1>常规</h1>
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
        <el-row>
            <el-button type="primary" plain @click.native="setNewInfo()">确认</el-button>
        </el-row>
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
    },
    methods: {
        // 获取站点配置
        getInfo: function() {
            this.$http.get('/api/website').then((info) => {
                let webInfo = info.data;

                this.siteName = webInfo.webName;
                this.subTitle = webInfo.subName;
                this.blogAddress = webInfo.domain;
            });
        },
        setNewInfo: function() {
            let params = 'name=' + this.siteName + '&subName=' + this.subTitle + '&domain=' + this.blogAddress;

            this.$http.put('/api/website?' + params).then((res) => {
                if (0 === res.data.code) {
                    this.$message({
                        showClose: true,
                        message: '添加成功',
                        type: 'success'
                    });
                }
            });
        }
    },
    mounted() {
        this.getInfo();
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
