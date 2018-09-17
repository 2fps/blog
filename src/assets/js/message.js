
const msgType = {
    0: '操作成功！'
};


let showMessage = (type, msg) => {
    this.$message({
        showClose: true,
        message: msgType[msg],
        type: type       // 'success'
    });
}

export default showClose;