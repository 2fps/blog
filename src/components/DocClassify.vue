<template>
    <div class="classify-box">
        <h4 class="classify-title">文章归类</h4>
        <div class="classify-display">
            <router-link v-bind:to="'/' + clf.id" class="classify-item" v-for="clf in classify" :key="clf.id">
                <i class="el-icon-date"></i>
                {{ clf.name + ' ( ' + clf.num + ' ) ' }}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classify: [{
                id: '1',
                name: '2018年1月',
                num: 10
            }, {
                id: '2',
                name: '2018年3月',
                num: 12
            }, {
                id: '3',
                name: '2018年8月',
                num: 101
            }]
        }
    }
}
</script>

<style lang="less" scoped>
.classify-box {
    font-size: 16px;
    text-align: left;
    margin: 0 20px 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    & > .classify-title {
        position: relative;
        margin: 0 0 15px;
        padding-bottom: 15px;
        &::after {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            width: 40px;
            background-color: #5BC0EB;
            content: '';
        }
    }
    & > .classify-display {
        list-style: none;
        padding-left: 0px;
        color: rgb(51, 51, 51);
        & > .classify-item {
            display: block;
            height: 32px;
            line-height: 32px;
            padding-top: 2px;
            padding-bottom: 2px;
            &:hover {
                color: #5BC0EB;
                transition: 0.5s;
                -webkit-transition: 0.5s;
                -o-transition: 0.5s;
                -moz-transition: 0.5s;
            }
        }
    }
}
</style>