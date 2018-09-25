import Vue from 'vue';

let vue = new Vue(),
    msgType = {
        0: '操作成功',
        1: '操作失败',
        2: '已经存在了',
        3: '无此数据',
        4: '请输入需要搜索的内容'
    }; 

let showMessage = (type, msg) => {
    // 有关键值，则使用，无则使用给定的提示
    if (msgType.hasOwnProperty(msg)) {
        msg = msgType[msg];
    }
    vue.$message({
        showClose: true,
        message: msg, //'添加成功',
        type: type  // 'success' 'error'
    });
};


export default showMessage;