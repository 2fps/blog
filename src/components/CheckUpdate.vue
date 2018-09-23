<template>
    <div class="check-box" :class="{'check-ok': newest, 'check-update': !newest}">
        <span v-show="newest">已是最新版本</span>
        <span v-show="!newest">有新版本可以使用，请现在更新。</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowVersion: 1.0,
            newest: true
        }
    },
    methods: {
        checkVersion () {
            let me = this;

/*             this.$http.get('/api/version').then(function() {}, function() {
                me.newest = false;
            }) */
        }
    },
    mounted() {
        this.checkVersion();
    }
}
</script>

<style lang="less" scoped>
.check-box {
    display: inline-block;
    background-color: #fff;
    margin: 25px 20px 20px 2px;
    padding: 11px 15px;
    font-size: 14px;
    flex-direction: row;
    line-height: 19px;
    border-left: 5px solid #fff;
    text-align: left;
}
.check-ok {
    border-left-color: #67C23A;
}
.check-update {
    border-left-color: #E6A23C;
}
</style>
