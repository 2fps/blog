<template>
    <div>
        <contentlogo></contentlogo>
        <contentlogo></contentlogo>
        <contentlogo></contentlogo>
        <contentlogo></contentlogo>
        <contentlogo></contentlogo>
        <contentlogo></contentlogo>
        <div class="content-pagination">
            <el-pagination
                background
                layout="prev, pager, next"
                @current-change="currentChange"
                :page-size="5"
                :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import ContentLogo from './ContentLogo'

export default {
    components: {
        'contentlogo': ContentLogo
    },
    methods: {
        currentChange() {
            alert();
        }
    }
}
</script>

<style lang="less">
.content-pagination {
    margin: 50px 0 30px;
}
</style>