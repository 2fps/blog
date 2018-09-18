<template>
    <el-collapse v-model="activeNames" @change="handleChange" activeNames="1">
        <el-collapse-item title="发布" name="1" class="collapse-content">
            <div>
                <el-button plain size="small">保存草稿</el-button>
                <el-button plain size="small">预览</el-button>
            </div>
            <div class="writearticle-time">
                <el-date-picker
                    v-model="publishTime"
                    type="datetime"
                    placeholder="选择日期时间">
                </el-date-picker>
            </div>
            <div>
                <el-button plain type="primary" size="small">发布</el-button>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script>

export default {
    data() {
        return {
            publishTime: ''
        }
    }
}
</script>

<style lang="less" scoped>
.writearticle-time {
    margin: 10px 0;
}
</style>
