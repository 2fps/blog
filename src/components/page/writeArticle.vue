<template>
    <div class="writeArt-box">
        <checkupdate></checkupdate>
        <h3>撰写新文章</h3>
        <el-row :gutter="20" class="el-form-item">
            <el-col :span="16">
                <div class="new-article-title">
                    <el-input v-model="siteName" placeholder="在此输入标题"></el-input>
                </div>
                <quill-editor ref="myTextEditor"
                            v-model="content"
                            :config="editorOption"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @ready="onEditorReady($event)">
                </quill-editor>
            </el-col>
            <el-col :span="8">
                <publisharticle></publisharticle>
                <classifymenu></classifymenu>
                <tagmenu></tagmenu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import CheckUpdate from '../CheckUpdate'
import PublishArticle from '../PublishArticle'
import ClassifyMenu from '../ClassifyMenu'
import TagMenu from '../TagMenu'
import { quillEditor } from 'vue-quill-editor'

export default {
    data() {
        return {
            siteName: '',
            editorOption: {},
            content: null
        }
    },
    components: {
        'checkupdate': CheckUpdate,
        'publisharticle': PublishArticle,
        'classifymenu': ClassifyMenu,
        'tagmenu': TagMenu,
        quillEditor
    },
    methods: {
        onEditorBlur(editor) {
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        },
        onEditorChange({ editor, html, text }) {
            // console.log('editor change!', editor, html, text)
            this.content = html
        }
    },
    computed: {
        editor() {
            return this.$refs.myTextEditor.quillEditor
        }
    },
    mounted() {
    }
}
</script>

<style lang="less" scoped>
.writeArt-box {
    text-align: left;
    .new-article-title {
        margin-bottom: 30px;
    }
    .quill-editor {
        height: 300px;
        max-height: 800px;
    }
}
</style>
