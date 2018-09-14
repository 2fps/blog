<template>
    <div>
        <el-table
            class="tags-table"
            ref="tagTable"
            stripe
            :data="dataInfo"
            tooltip-effect="dark"
            style="width: 100%"
            :page-sizes="[10,20,50,100]"
            :page-size="pageSize"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column v-for="(col, ind) in cols"
            :key="ind"
            :prop="col.name"
            :label="col.labelname">
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
            from: 0         // 第一条的位置
        }
    },
    methods: {
        handleSelectionChange: function() {
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
</style>
