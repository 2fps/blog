<template>
    <aside class="person-introduction clearfix">
        <div class="photo-wrapper">
            <img class="about-photo" :src="myImgSrc">
        </div>
        <h4 class="person-title">{{ myName }}</h4>
        <div class="person-content">
            <p>{{ myWords }}</p>
        </div>
    </aside>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        myName: function() {
            return this.$store.state.config.name
        },
        myWords: function() {
            return this.$store.state.config.words
        },
        myImgSrc: function() {
            return this.$store.state.config.imgSrc
        }
    },
    methods: {
        getConfig() {
            var me = this;

            this.$http.get('/api/config').then(function (info) {
                let config = info.data.config;

                me.$store.commit('setName', config.name)
                me.$store.commit('setWords', config.words)
                me.$store.commit('setImgSrc', config.imgSrc)
            });
        }
    },
    mounted() {
        this.getConfig();
    }
}
</script>

<style lang="less" scoped>
.person-introduction {
    margin: 140px 20px 25px;
    padding: 30px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 0px;
}
.photo-wrapper {
    display: table;
    margin: 0px auto 30px;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 5px;
    border-radius: 50%;
    margin-top: -110px;
    & > .about-photo {
        max-height: 180px;
        border-radius: 50%;
    }
}
.person-title {
    text-align: left;
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
.person-content {
    text-align: left;
    & > p {
        margin-bottom: 1em;
        font-size: 16px;
    }
}
</style>