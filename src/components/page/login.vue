<template>
    <div class="login-box">
        <el-form :model="logForm" status-icon :rules="loginRule" ref="logForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="checkUsername">
                <el-input type="text" v-model="logForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
                <el-input type="password" v-model="logForm.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('logForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data() {
        let validUser = (rule, value, callback) => {
            if ('' === value) {
                callback(new Error('请输入用户名'))
            }
        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            }
        }
        return {
            logForm: {
                username: '',
                password: ''
            },
            loginRule: {
                checkUsername: [{
                    validator: validUser,
                    trigger: 'blur'
                }],
                checkPass: [{
                    validator: validatePass,
                    trigger: 'blur'
                }]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$router.push('overview');
/*             this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            }); */
        }
    }
  }
</script>

<style lang="less" scoped>
.login-box {
    width: 400px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -200px;
    margin-top: -100px;
}
</style>