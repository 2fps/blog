import Vue from 'vue';

let vue = new Vue(),
    msgType = {
        0: '操作成功',
        1: '操作失败',
        2: '已经存在了',
        3: '无此数据'
    }; 

let showMessage = (type, msg) => {
    vue.$message({
        showClose: true,
        message: msgType[msg], //'添加成功',
        type: type  // 'success'
    });
};


export default showMessage;