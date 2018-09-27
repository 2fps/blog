<template>
    <div class="allTags-box">
        <checkupdate></checkupdate>
        <h3>文章 &nbsp;<el-tag class="jump-link" type="info" @click.native="writeNewArticle">写文章</el-tag></h3>
        <div style="margin: 20px 0">
            <el-radio-group v-model="state" size="small">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button disabled="" label="已发布"></el-radio-button>
                <el-radio-button disabled="" label="草稿"></el-radio-button>
                <el-radio-button disabled="" label="待审"></el-radio-button>
            </el-radio-group> 
            <span>共{{ articleNum }}条</span>
        </div>
        <el-row>
            <el-button type="danger" plain @click.native="deleteChoose()">删除选中</el-button>
        </el-row>
        <el-table
            class="tags-table"
            ref="tagTable"
            stripe
            :data="alltags"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="selectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="title"
            label="标题">
            </el-table-column>
            <el-table-column
            prop="author"
            label="作者">
            </el-table-column>
            <el-table-column
            prop="catalogs"
            label="分类目录">
            </el-table-column>
            <el-table-column
            prop="tags"
            label="标签">
            </el-table-column>
            <el-table-column
            prop="comments"
            label="评论">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期">
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <!-- <el-button
                    size="mini"
                    type="success"
                    @click="deleteInfo(scope.$index, scope.row)">查看</el-button> -->
                    <el-button
                    size="mini"
                    type="warning"
                    @click="modifyArticle(scope.$index, scope.row)">编辑</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'
import msg from '../../assets/js/message'

let stateMap = {
    '全部': -1,
    '已发布': 0,
    '草稿': 1,
    '待审核': 2
};

export default {
    data() {
        return {
            dataInfo: [],
            alltags: [],
            selectedArr: [],
            state: '全部',
            articleNum: 0
        }
    },
    components: {
        'checkupdate': CheckUpdate
    },
    methods: {
        getDataInfo: function() {
            let choose = stateMap[this.state],
                params = choose > 0 ? '?state=' + choose : '';

            this.$http.get('/api/articles' + params).then((info) => {
                this.alltags = info.data.list;
                this.articleNum = info.data.count;
            });
        },
        selectionChange: function(val) {
            this.selectedArr = val;
        },
        deleteChoose: function() {
            let ids = [];

            this.selectedArr.forEach((val, ind) => {
                ids.push(val._id)
            });

            // 参数是通过间隔,的方式区分的
            this.$http.delete('/api/articles?id=' + ids.join(',')).then((res) => {
                if (0 === res.data.code) {
                    msg('success', 0);
                    // 成功重新刷新
                    this.getDataInfo();
                }
            });
        },
        // 跳转到新增文章
        writeNewArticle () {
            this.$router.push('writeArticle');
        },
        // 修改已经生成的文章
        modifyArticle() {
            // 路由跳转
            this.$router.push('/writeArticle');
            // 设置默认显示的内容
        }
    },
    mounted() {
        this.getDataInfo();
    }
}
</script>

<style lang="less" scoped>
.allTags-box {
    text-align: left;
    .input-title {
        height: 40px;
        line-height: 40px;
    }
    h1 {
        font-weight: bold;
    }
    .tags-table {
        margin-top: 10px;
    }
    .jump-link {
        cursor: pointer;
    }
}
</style>
