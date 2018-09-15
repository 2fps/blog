<template>
    <div>
        <el-row>
            <el-button type="danger" plain @click.native="deleteChoose()">删除选中</el-button>
        </el-row>
        <el-table
            class="tags-table"
            ref="tagTable"
            stripe
            :data="dataInfo"
            tooltip-effect="dark"
            style="width: 100%"
            :page-sizes="[10,20,50,100]"
            :page-size="pageSize"
            @selection-change="selectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column v-for="(col, ind) in cols"
            :key="ind"
            :prop="col.name"
            :label="col.labelname">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="danger"
                    @click="deleteInfo(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-pagination
            class="table-pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10,20,50,100]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="count">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: ['prefix', 'cols'],
    data() {
        return {
            dataInfo: [],
            count: 0,
            pageSize: 10,
            currentPage: 0,
            selectedArr: [],    // 已被select中的
            from: 0             // 第一条的位置
        }
    },
    methods: {
        selectionChange: function(val) {
            this.selectedArr = val;
        },
        getDataInfo: function () {
            // 组url
            let url = '/api/' + this.prefix + '?from=' + this.from + '&offset=' + this.pageSize;

            this.$http.get(url).then((info) => {
                this.dataInfo = info.data;
            });
        },
        getCount: function() {
            this.$http.get('/api/' + this.prefix + '/length').then((info) => {
                this.count = info.data.count;
            });
        },
        handleSizeChange: function(curPageSize) {
            // 重新复制pagesize
            this.pageSize = curPageSize;
            this.getDataInfo();
        },
        // 当前页发生改变时触发
        handleCurrentChange: function(curPage) {
            // 重新赋值当前页
            this.currentPage = curPage;
            // 重新计算要显示的第一条数据的位置
            this.from = (curPage - 1) * this.pageSize;
            this.getDataInfo();
        },
        // 单个项删除
        deleteInfo: function(index, row) {
            let deleteName = row.name;

            this.$http.delete('/api/' + this.prefix + '?name=' + deleteName).then((res) => {
                if (0 === res.data.code) {
                    this.$message({
                        showClose: true,
                        message: '删除成功',
                        type: 'success'
                    });
                    // 成功重新刷新
                    this.getDataInfo();
                    this.getCount();
                }
            });
        },
        // 批量删除
        deleteChoose: function() {
            let names = [];

            this.selectedArr.forEach((val, ind) => {
                names.push(val.name)
            });

            // 参数是通过间隔,的方式区分的
            this.$http.delete('/api/' + this.prefix + '?name=' + names.join(',')).then((res) => {
                if (0 === res.data.code) {
                    this.$message({
                        showClose: true,
                        message: '删除成功',
                        type: 'success'
                    });
                    // 成功重新刷新
                    this.getDataInfo();
                    this.getCount();
                }
            });
        }
    },
    mounted() {
        this.getDataInfo();
        this.getCount();
    }
}
</script>

<style lang="less" scoped>
.table-pagination {
    text-align: center;
}
.tags-table {
    margin-top: 10px;
}
</style>
