<template>
    <div class="tags-box">
        <h4 class="tags-title">标签</h4>
        <div class="tags-display">
            <router-link v-bind:to="'/tags?key=' + tag.name"  class="tag-case" v-for="tag in tags" :key="tag.id" @click.native="tagDetail(tag.name)">{{ tag.name }}</router-link>
        </div>
    </div>
</template>


<script>
import arrayRandom from '../assets/arrayRandom.js'

export default {
    data() {
        return {
            tags: []
        }
    },
    methods: {
        getTags() {
            var me = this;

            this.$http.get('/api/tags').then(function (info) {
                let tags = info.data;
                // 检查有无数据
                if (0 === tags.length) {
                    // 没有数据
                    return;
                }
                // 过滤tag内容为0的
                tags = tags.filter(function(val) {
                    if (val.number > 0) {
                        return true;
                    }
                });

                // 将tags乱序显示
                me.tags = arrayRandom(info.data);
            });
        },
        // 通知主内容区数据变化
        tagDetail(name) {
            this.$store.commit('setMode', {
                main: 'tag',
                mode: '标签目录',
                modeContent: name
            })
        }
    },
    mounted() {
        this.getTags();
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