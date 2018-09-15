<template>
    <div class="reader-box">
        <checkupdate></checkupdate>
        <h3>设置</h3>
        <h1>阅读</h1>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="4" class="input-title">
                单页至多显示
            </el-col>
            <el-col :span="16">
                <el-select v-model="arts" placeholder="请选择">
                    <el-option
                    v-for="item in pieces"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <span>篇文章</span>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="primary" plain @click.native="setNewPiece()">确认</el-button>
        </el-row>
    </div>

</template>

<script>
import CheckUpdate from '../CheckUpdate'

export default {
    data() {
        return {
            pieces: [],
            arts: 10        // 默认是10
        }
    },
    components: {
        'checkupdate': CheckUpdate
    },
    methods: {        // 获取站点配置
        getInfo: function() {
            this.$http.get('/api/website').then((info) => {
                let webInfo = info.data;

                this.arts = webInfo.numInpage;
            });
        },
        getPiece: function() {
            // 页数暂时写在客户端吧
            for (let i = 5; i < 21; ++i) {
                this.pieces.push({
                    label: i,
                    value: i
                });
            }
        },
        setNewPiece: function() {
            let params = 'numInpage=' + this.arts;

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
        this.getPiece();
        this.getInfo();
    }
}
</script>

<style lang="less" scoped>
.reader-box {
    text-align: left;
    .input-title {
        height: 40px;
        line-height: 40px;
    }
}
</style>
