<style rel="stylesheet/scss" lang="scss">
    .login-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(../../assets/login_spring.jpg) no-repeat center center;
        background-size: cover;
        text-align: center;
        overflow: hidden;
        .login-content{
            padding:50px 0;
        }
        .login-introduce{
            padding: 0 220px;color: #fff;
            h2{
                margin-bottom:15px;font-weight:normal;
            }
            p{
                font-size:14px;line-height:1.9;
            }
        }
        .ivu-form-inline .ivu-form-item{
            display:block;margin-right:0;
            border: 1px solid #eee;
            background: #fff;
            border-radius: 5px;
            color: #454545;
        }
        .ivu-input-group{
            top: 0;font-size: 14px;
        }
        .ivu-input-group-prepend{
            padding:4px 12px;
            background-color: #fff;
            border:none;
            border-right: 1px solid #eee;
        }
        .ivu-form-item-error .ivu-input{
            border:none;
        }
        .ivu-icon{
            font-size:24px;
        }
        input {
            background: transparent;
            border: 0px;font-size: 16px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: #555;outline:none;border:none;
            height: 47px;
        }
        .login-form {
            width: 440px;
            padding: 40px;
            margin-top: 50px;
            background-color: rgba(255, 255, 255, 0.5);
            position: relative;
        }
        .ivu-btn{
            display: inline-block;
            width:100%;
            line-height: 1;
            letter-spacing:4px;
            white-space: nowrap;
            cursor: pointer;
            margin: 0;
            font-size:18px;
            padding: 12px 15px;
            border-radius: 4px;
        }
    }
</style>
<template>
    <div class="login-container">
        <Passport-header class="header-container"/>
        <div class="login-content outer-w">
            <div class="login-introduce alg-c">
                <h2>{{product_name}}欢迎您！</h2>
                <p class="alg-l">{{list.introduce_depict}}</p>
            </div>
            <div class="login-form">
                <Form ref="loginForm" :model="loginForm" :rules="loginRules" inline>
                    <Form-item prop="mobile">
                        <Input type="text" name="mobile" v-model="loginForm.mobile" placeholder="用户名">
                            <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Form-item prop="password">
                        <Input type="password" name="password" v-model="loginForm.password" placeholder="密码">
                            <Icon type="ios-locked-outline" slot="prepend"></Icon>
                        </Input>
                    </Form-item>
                    <Button type="primary" @click="handleSubmit('loginForm')">登录</Button>
                </Form> 
            </div>
        </div>
        <Passport-footer class=" -container"/> 
    </div>
</template>
<script>
    import { mapGetters } from 'vuex';
    import PassportHeader from './common/passportHeader';
    import PassportFooter from './common/passportFooter';
    import { loginData } from 'api/login';
    export default {
        name: 'login',
        data () {
            return {
                list: {
                    introduce_depict: ""
                },
                loginForm: {
                    mobile: '',
                    password: ''
                },
                loginRules: {
                    mobile: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                    ]
                }
            }
        },
        created() {
          this.fetchData();
        },
        components: { PassportHeader , PassportFooter },
        computed: {
            ...mapGetters([
              'auth_type',
              'product_name'
            ])
        },
        methods: {
            fetchData() {
                loginData().then(response => {
                  this.list = response.data;
                }).catch(err => {
                  this.$Message.error(err);
                });
            },
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch('LoginByUser', this.loginForm).then(() => {
                            this.$router.push({ path: '/' });
                        }).catch(err => {
                            this.$Message.error(err);
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }
</script>

