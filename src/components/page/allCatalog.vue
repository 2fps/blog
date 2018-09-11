<template>
    <div class="catalog-box">
        <checkupdate></checkupdate>
        <h3>分类目录</h3>
        <h1>添加新分类目录</h1>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="4" class="input-title">
                名称
            </el-col>
            <el-col :span="16">
                <el-input v-model="siteName" placeholder="请输入分类目录名"></el-input>
            </el-col>
        </el-row>
        <el-r>
            <el-button type="primary" plain>添加新分类目录</el-button>
        </el-r>
        <br />
        <el-table
            class="catalog-table"
            ref="catalogTable"
            stripe
            :data="catalogTable"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="name"
            label="名称">
            </el-table-column>
            <el-table-column
            prop="num"
            label="总数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'

export default {
    data() {
        return {
            catalogTable: [{
                name: 'Web前端',
                num: 12
            }, {
                name: 'Web后端',
                num: 21
            }, {
                name: '数据库',
                num: 9
            }]
        }
    },
    components: {
        'checkupdate': CheckUpdate
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.catalog-box {
    text-align: left;
    .input-title {
        height: 40px;
        line-height: 40px;
    }
    h1 {
        font-weight: bold;
    }
    .catalog-table {
        margin-top: 30px;
    }
}
</style>
