<template>
    <el-collapse v-model="activeNames" @change="handleChange" activeNames="1">
        <el-collapse-item title="发布" name="1" class="collapse-content">
            <div>
                <el-button plain size="small">保存草稿</el-button>
                <el-button plain size="small">预览</el-button>
            </div>
            <div>
                。。。。。。。。。。等等功能
            </div>
            <div>
                <el-button plain type="primary" size="small">发布</el-button>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<style lang="less" scoped>

</style>
