<template>
    <div class="catalog-box">
        <h4 class="catalog-title">分类目录</h4>
        <div class="catalog-display">
            <router-link class="catalog-item" v-bind:to="'/catalog?key=' + cata.name" v-for="(cata, index) in catalogs" :key="index">
                <i class="fa fa-folder-open-o"></i>
                <span @click="changeCatalog(cata.name)">{{ cata.name + ' ( ' + cata.nums + ' ) ' }}</span></router-link>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            catalogs: []
        }
    },
    methods: {
        getCatalog () {
            this.$http.get('/api/catalogs').then((info) => {
                this.catalogs = info.data.data;
            });
        },
        changeCatalog(name) {
            this.$store.commit('setMode', {
                main: 'catalog',
                mode: '分类目录',
                modeContent: name
            });
        }
    },
    mounted() {
        this.getCatalog();
    }
}
</script>

<style lang="less" scoped>
.catalog-box {
    font-size: 16px;
    text-align: left;
    margin: 0 20px 20px;
    padding: 20px;
    border: 1px solid #e0e0e0;
    & > .catalog-title {
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
    & > .catalog-display {
        list-style: none;
        padding-left: 0px;
        color: rgb(51, 51, 51);
        overflow: hidden;
        & > .catalog-item {
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