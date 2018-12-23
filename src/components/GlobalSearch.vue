<template>
    <div class="search-box">
        <el-input v-model="searchContent" auto-complete="off" placeholder="Search..." @keyup.enter.native="onSearch"></el-input>
    </div>
</template>

<script>
import msg from '../assets/js/message'

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
                this.$router.push('/index?search=' + val);
                // 设置搜索配置
                this.$store.commit('setMode', {
                    mode: 'search',
                    modeDes: '搜索',
                    con: val
                });
            } else {
                msg('error', 4);
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