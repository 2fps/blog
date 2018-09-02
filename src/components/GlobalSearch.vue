<template>
    <div class="search-box">
        <el-input v-model="searchContent" placeholder="Search..."></el-input>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchContent: ''
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