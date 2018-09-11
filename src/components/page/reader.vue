<template>
    <div class="reader-box">
        <checkupdate></checkupdate>
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
            pieces: [],
            arts: 10        // 默认是10
        }
    },
    components: {
        'checkupdate': CheckUpdate
    },
    methods: {
        setPiece: function() {
            for (let i = 5; i < 21; ++i) {
                this.pieces.push({
                    label: i,
                    value: i
                });
            }
        }
    },
    mounted() {
        this.setPiece()
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
