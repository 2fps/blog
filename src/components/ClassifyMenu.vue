<template>
    <el-collapse v-model="activeNames" @change="handleChange" activeNames="1">
        <el-collapse-item title="分类目录" name="1" class="collapse-content">
            <div>
            </div>
            <div class="writearticle-time">
                <el-checkbox-group v-model="classList">
                    <el-checkbox label="web1" class="check-type"></el-checkbox>
                    <el-checkbox label="web2" class="check-type"></el-checkbox>
                    <el-checkbox label="web3" class="check-type"></el-checkbox>
                </el-checkbox-group>
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
            classList: []
        }
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