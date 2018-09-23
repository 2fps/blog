<template>
    <div class="footer">
        <div>
            <div>
                <div>
                    <p class="footer-icon">
                        <a target="_blank" rel="nofollow" href="http://weibo.com/3628209523">
                            <i class="fa fa-weibo fa-2x"></i>
                        </a>
                        &nbsp;
                        <a target="_blank" rel="nofollow" href="https://github.com/2fps">
                            <i class="fa fa-github fa-2x"></i>
                        </a>
                    </p>
                    <p>Copyright 2016 - {{ nowYear }} <a class="footer-link" href="http://www.zhuyuntao.cn">{{ webName }}</a>. All Rights Reserved.<br><a class="footer-link" href="http://www.miitbeian.gov.cn/" rel="external nofollow" target="_blank">苏ICP备15040567号-1</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowYear: new Date().getFullYear()
        }
    },
    computed: {
        webName: function() {
            return this.$store.state.config.webName;
        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    height: 180px;
    text-align: center;
    color: rgba(255, 255, 255, .3);
    text-transform: uppercase;
    height: 50px;
    line-height: 25px;
    .footer-icon {
        height: 40px;
    }
    .footer-link {
        color: rgba(255, 255, 255, .5);
        &:hover {
            color: #5BC0EB;
        }
    }
}
</style>