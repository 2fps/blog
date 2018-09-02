<template>
    <div class="tags-box">
        <h4 class="tags-title">标签</h4>
        <div class="tags-display">
            <router-link v-bind:to="'/' + tag.id"  class="tag-case" v-for="tag in tags" :key="tag.id">{{ tag.name }}</router-link>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            tags: [{
                id: 'leak',
                name: '内存泄漏'
            }, {
                id: 'html5',
                name: 'HTML5'
            }, {
                id: 'browser',
                name: '浏览器'
            }, {
                id: 'linux',
                name: 'Linux'
            }, {
                id: 'electron',
                name: 'Electron'
            }, {
                id: 'chrome',
                name: 'chrome'
            }]
        }
    }
}
</script>


<style lang="less">
.tags-box {
    text-align: left;
    margin: 0 20px 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    & > .tags-title {
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
    & > .tags-display {
        overflow: hidden;
        cursor: pointer;
        & > .tag-case {
            color: rgb(76, 76, 76);
            font-size: 13px;
            float: left;
            border: 1px solid #000;
            height: 36px;
            line-height: 36px;
            padding: 0 5px;
            margin: 0 4px 8px 0;
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