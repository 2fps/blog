<template>
    <div class="allTags-box">
        <checkupdate></checkupdate>
        <h3>文章 &nbsp;<el-tag type="info" >写文章</el-tag></h3>
        <div style="margin-top: 20px">
            <el-radio-group v-model="state" size="small">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="已发布"></el-radio-button>
                <el-radio-button label="草稿"></el-radio-button>
                <el-radio-button label="待审"></el-radio-button>
            </el-radio-group>
            <span>共11条</span>
        </div>
        <el-table
            class="tags-table"
            ref="tagTable"
            stripe
            :data="alltags"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
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
            prop="catalog"
            label="分类目录">
            </el-table-column>
            <el-table-column
            prop="tags"
            label="标签">
            </el-table-column>
            <el-table-column
            prop="comment"
            label="评论">
            </el-table-column>
            <el-table-column
            prop="date"
            label="日期">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'

export default {
    data() {
        return {
            alltags: [{
                title: 'HTML5',
                author: 'zyt',
                catalog: '前端',
                tags: 'HTML5',
                comment: 12,
                date: '2018-09-03 22:23:09'
            }],
            state: '全部'
        }
    },
    components: {
        'checkupdate': CheckUpdate
    },
    methods: {
        setPiece: function() {
            for (let i = 5; i < 21; ++i) {
                this.pieces.push({
                    label: i,
                    value: i
                });
            }
        }
    },
    mounted() {
        this.setPiece()
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
}
</style>
