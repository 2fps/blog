<template>
    <el-collapse v-model="activeNames" @change="handleChange" activeNames="1">
        <el-collapse-item title="标签" name="1" class="collapse-content">
            <div>
            </div>
            <div class="writearticle-time">
                <el-autocomplete
                    class="inline-input"
                    :fetch-suggestions="querySearch"
                    v-model="chooseTags"
                    placeholder="请输入内容"
                    @select="handleSelect"
                ></el-autocomplete>
                <el-button type="primary" size="small">添加</el-button>
            </div>
            <div>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>
export default {
    data() {
        return {
            chooseTags: '',
            tags: [],
            activeNames: ['1']
        }
    },
    methods: {
        handleSelect: function() {
            this.$store.commit('setTags', this.chooseTags);
        },
        handleChange: function() {},
        querySearch (queryString, cb) {
            var tags = this.tags;
            var results = queryString ? tags.filter(this.createFilter(queryString)) : tags;

            // 调用 callback 返回建议列表的数据
            cb(results);
        },
        createFilter(queryString) {
            return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        getTags () {
            return this.$http.get('/api/tags').then((info) => {
                let tags = this.tags;

                info.data.forEach(val => {
                    tags.push({
                        value: val.name
                    })
                });
            });
        }
    },
    mounted () {
        this.getTags();
    }
}
</script>

<style lang="less" scoped>
.writearticle-time {
    margin: 10px 5px;
    padding: 5px;
    .check-type {
        display: block;
    }
    
}
    
</style>