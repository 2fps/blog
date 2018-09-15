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
        <el-row>
            <el-button type="primary" plain @click.native="addNewTag()">添加新标签</el-button>
        </el-row>
        <br />
        <tagtable :cols="tagCols" prefix="tags" ref="tagtable"></tagtable>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'
import Table from '../Table'

export default {
    data() {
        return {
            tagname: '',
            alltags: [],
            tagCols: [{         // tag页面table的列
                name: 'name',
                labelname: '名称'
            }, {
                name: 'num',
                labelname: '总数'
            }]
        }
    },
    components: {
        'checkupdate': CheckUpdate,
        'tagtable': Table
    },
    methods: {
        // 新增标签
        addNewTag: function() {
            // 输入框内容校验
            var tName = this.tagname;

            if (0 === tName.length) {
                this.$message({
                    showClose: true,
                    message: '请输入标签名',
                    type: 'error'
                });

                return;
            }

            this.$http.post('/api/tags', {
                name: tName
            }).then((res) => {
                if (0 !== res.data.code) {
                    // error
                    alert(res.data.code);
                    return;
                }
                // 添加后重新获取数据
                this.$nextTick(() => {
                    this.$refs.tagtable.getDataInfo();
                    this.$refs.tagtable.getCount();

                    this.finishAdd();
                });
            });
        },
        // 成功添加后的提示和数据处理
        finishAdd: function() {
            this.$message({
                showClose: true,
                message: '添加成功',
                type: 'success'
            });
            this.tagname = '';
        }
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
