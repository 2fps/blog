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
                <el-input v-model="catalogName" placeholder="请输入分类目录名"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-button type="primary" plain @click.native="addNewCatalog()">添加新分类目录</el-button>
        </el-row>
        <br />
        <tagtable :cols="catalogCols" prefix="catalogs" ref="catalogtable"></tagtable>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'
import Table from '../Table'

export default {
    data() {
        return {
            catalogCols: [{
                name: 'name',
                labelname: '名称'
            }, {
                name: 'num',
                labelname: '总数'
            }],
            catalogName: ''
        }
    },
    components: {
        'checkupdate': CheckUpdate,
        'tagtable': Table
    },
    methods: {
        addNewCatalog: function() {
            // 输入框内容校验
            var tName = this.catalogName;

            if (0 === tName.length) {
                this.$message({
                    showClose: true,
                    message: '请输入标签名',
                    type: 'error'
                });

                return;
            }

            this.$http.post('/api/catalogs', {
                name: tName
            }).then((res) => {
                if (0 !== res.data.code) {
                    // error
                    alert(res.data.code);
                    return;
                }
                // 添加后重新获取数据
                this.$nextTick(() => {
                    this.$refs.catalogtable.getDataInfo();
                    this.$refs.catalogtable.getCount();

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
            this.catalogName = '';
        }
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
