<template>
    <div>
        <div class="login-box">
            <el-form :model="logForm" status-icon :rules="loginRule" ref="logForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="checkUsername">
                    <el-input type="text" v-model="logForm.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="checkPass">
                    <el-input type="password" v-model="logForm.password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('logForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import msg from '../../assets/js/message';

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
        // 登录接口
        login(formName) {
            let username = this.logForm.username,
                password = this.logForm.password;

            this.$http.post('/api/user', {
                username: username,
                password, password
            }).then((info) => {
                let code = info.data.code;

                if (6 === code) {
                    // 登录成功
                    msg('success', 6);
                    this.$router.push('/overview');
                } else {
                    msg('error', 5);
                }
            });
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