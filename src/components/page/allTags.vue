<template>
    <div class="allTags-box">
        <checkupdate></checkupdate>
        <h3>标签</h3>
        <h1>添加新标签</h1>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="4" class="input-title">
                名称
            </el-col>
            <el-col :span="16">
                <el-input v-model="tagname" placeholder="请输入标签名"></el-input>
            </el-col>
        </el-row>
        <el-r>
            <el-button type="primary" plain @click.native="addNewTag()">添加新标签</el-button>
        </el-r>
        <br />
        <el-table
            class="tags-table"
            ref="tagTable"
            stripe
            :data="alltags"
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
            tagname: '',
            alltags: [{
                name: 'HTML5',
                num: 12
            }, {
                name: 'CSS',
                num: 21
            }, {
                name: 'JavaScript',
                num: 9
            }]
        }
    },
    components: {
        'checkupdate': CheckUpdate
    },
    methods: {
        addNewTag: function() {
            // 输入框内容校验
            var tName = this.tagname;

            this.$http.post('/api/tags', {
                name: tName
            });
        },
        handleSelectionChange: function() {}
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.allTags-box {
    text-align: left;
    .input-title {
        height: 40px;
        line-height: 40px;
    }
    h1 {
        font-weight: bold;
    }
    .tags-table {
        margin-top: 30px;
    }
}
</style>
