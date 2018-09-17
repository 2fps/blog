<template>
    <el-collapse v-model="activeNames" @change="handleChange" activeNames="1">
        <el-collapse-item title="标签" name="1" class="collapse-content">
            <div>
            </div>
            <div class="writearticle-time">
                <el-autocomplete
                    class="inline-input"
                    v-model="tags"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect"
                ></el-autocomplete>
                <el-button type="primary" size="small">主要按钮</el-button>
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
            tags: '',
            querySearch: []
        }
    },
    method: {
        handleSelect: function() {}
    }
}
</script>

<style lang="less" scoped>
.writearticle-time {
    border: 1px solid #e0e0e0;
    margin: 10px 5px;
    padding: 5px;
    .check-type {
        display: block;
    }
    
}
    
</style>