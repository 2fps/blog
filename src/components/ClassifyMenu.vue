<template>
    <el-collapse v-model="activeNames" activeNames="1" class="cMenu-box">
        <el-collapse-item title="分类目录" name="1" class="collapse-content">
            <div>
            </div>
            <div class="writearticle-time">
                <el-checkbox-group v-model="classList" @change="handleChange">
                    <el-checkbox v-for="(lab, index) in catalogs" :key="index" :label="lab.value" class="check-type"></el-checkbox>
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
            classList: [],
            activeNames: ['1'],
            catalogs: []
        }
    },
    methods: {
        handleChange: function() {
            this.$store.commit('setCatalogs', this.classList);
        }
    },
    mounted() {
        this.$http.get('/api/catalogs').then((info) => {
            info.data.forEach(val => {
                this.catalogs.push({
                    value: val.name
                });
            });
        });
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
.cMenu-box {
    margin-bottom: 20px;
}
.el-checkbox {
    margin-left: 20px;
}
</style>