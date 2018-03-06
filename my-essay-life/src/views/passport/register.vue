<style rel="stylesheet/scss" lang="scss">
	.register-content{
		margin: 0 auto;
		.reg-introduce{
			padding: 80px 220px;
			h2{
				margin-bottom:15px;font-weight:normal;
			}
			p{
				font-size:14px;line-height:1.9;
			}
		}
		.reg-form{
			width: 500px;margin: 0 auto;
		}
	}
</style>
<template>
	<div class="register-container">
		<Passport-header class="header-container"/>
		<div class="register-content outer-w">
			<div class="reg-introduce alg-c">
				<h2>{{product_name}}欢迎您！</h2>
				<p class="alg-l">{{list.introduce_depict}}</p>
			</div>
			<div class="reg-form">
				<template>
				    <Form ref="regForm" :model="regForm" :rules="ruleCustom" :label-width="120">
				        <Form-item label="手机号：" prop="mobile">
				            <Input type="text" v-model="regForm.mobile"></Input>
				        </Form-item>
				        <Form-item label="验证码：" prop="img_code">
				            <Input type="text" v-model="regForm.img_code"></Input>
				        </Form-item>
				        <Form-item label="短信验证码：" prop="v_code">
				            <Input type="text" v-model="regForm.v_code"></Input>
				        </Form-item>
				        <Form-item label="用户昵称：" prop="nickname">
				            <Input type="text" v-model="regForm.nickname"></Input>
				        </Form-item>
				         <Form-item label="输入密码：" prop="password">
				            <Input type="password" v-model="regForm.password"></Input>
				        </Form-item>
				         <Form-item label="确认密码：" prop="re_password">
				            <Input type="password" v-model="regForm.re_password"></Input>
				        </Form-item>
				        <Form-item label="安全邮箱：" prop="mail">
				            <Input type="text" v-model="regForm.mail"></Input>
				        </Form-item>
				        <Form-item label="安全QQ：" prop="qq">
				            <Input type="text" v-model="regForm.qq"></Input>
				        </Form-item>
				        <Form-item>
				            <Button type="primary" @click="handleSubmit('regForm')">提交</Button>
				            <Button type="ghost" @click="handleReset('regForm')" style="margin-left: 8px">重置</Button>
				        </Form-item>
				    </Form>
				</template>
			</div>
		</div>
		<Passport-footer class="footer-container"/> 
	</div> 
</template>
<script>
	import { mapGetters } from 'vuex';
	import PassportHeader from './common/passportHeader';
	import PassportFooter from './common/passportFooter';
	import { isMobile, isSMSCode, isPwd, isNick, isEmail, isQq } from 'utils/validate';
    import { regData } from 'api/register';
    export default {
    	name: 'register',
        data () {
        	const validateMobile = (rule, value, callback) => {
        		if (value != "" && value != undefined){
        			if (!isMobile(value)) {
			            callback(new Error('请输入正确的手机号码！'));
			        }
        		} else {
                    callback(new Error('手机号码不能为空！'));
                }
                callback();
            };
            const validateImgcode = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isSMSCode(value)) {
			            callback(new Error('请输入6位图形验证码！'));
			        }
        		} else {
                    callback(new Error('图形验证码不能为空！'));
                }
                callback();
            };
            const validateVcode = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isSMSCode(value)) {
			            callback(new Error('请输入6位短信验证码！'));
			        }
        		} else {
                    callback(new Error('短信验证码不能为空！'));
                }
                callback();
            };
            const validateNickname = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isNick(value)) {
			            callback(new Error('请输入正确昵称！'));
			        }
        		} else {
                    callback(new Error('昵称不能为空！'));
                }
                callback();
            };
        	const validatePass = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isPwd(value)) {
			            callback(new Error('密码需为8-20位，至少包含字母和数字'));
			        }
        		} else {
                    callback(new Error('密码不能为空！'));
                }
                callback();
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isPwd(value)) {
			            callback(new Error('密码需为8-20位，至少包含字母和数字'));
			        } else if (value !== this.regForm.password) {
                    	callback(new Error('两次输入密码不一致!'));
                	} 
        		} else {
                    callback(new Error('请再次输入密码！'));
                }
                callback();
            };
            const validateMail = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isEmail(value)) {
			            callback(new Error('请输入正确邮箱！'));
			        }
        		} else {
                    callback(new Error('邮箱不能为空！'));
                }
                callback();
            };
            const validateQq = (rule, value, callback) => {
                if (value != "" && value != undefined){
        			if (!isQq(value)) {
			            callback(new Error('请输入正确qq号！'));
			        }
        		} else {
                    callback(new Error('qq号不能为空！'));
                }
                callback();
            };
            return {
                list: {
                    introduce_depict: ""
                },
                regForm: {
                    mobile: '',
                    img_code: '',
                    v_code: '',
                    nickname: '',
                    password: '',
                    re_password: '',
                    mail: '',
                    qq: ''
                },
                ruleCustom: {
                	mobile: [
                        { validator: validateMobile, trigger: 'blur' }
                    ],
                    img_code: [
                        { validator: validateImgcode, trigger: 'blur' }
                    ],
                    v_code: [
                        { validator: validateVcode, trigger: 'blur' }
                    ],
                    nickname: [
                        { validator: validateNickname, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    re_password: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    mail: [
                        { validator: validateMail, trigger: 'blur' }
                    ],
                    qq: [
                        { validator: validateQq, trigger: 'blur' }
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
	          'product_name',
	        ])
	    },
        methods: {
            fetchData() {
                regData().then(response => {
                  this.list = response.data;
                }).catch(err => {
                  this.$Message.error(err);
                });
            },
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                        this.$store.dispatch('regSure', this.regForm).then(() => {
                            this.$Message.success('提交成功!');
                            // this.$router.push({ path: '/' });
                        }).catch(err => {
                            this.$Message.error(err);
                        });
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>
