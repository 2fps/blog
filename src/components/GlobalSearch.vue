<template>
    <div class="search-box">
        <el-input v-model="searchContent" auto-complete="off" placeholder="Search..." @keyup.enter.native="onSearch"></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchContent: ''
        }
    },
    methods: {
        onSearch() {
            let val = this.searchContent

            if (val) {
                this.$router.push(val);
            } else {
                this.$message({
                    showClose: true,
                    message: '请输入需要搜索的内容',
                    type: 'error'
                });
            }
        }
    }
}
</script>

<style lang="less" scoped>
.search-box {
    border: 1px solid #e0e0e0;
    margin: 0 20px 20px;
    padding: 30px;
}
</style>