export default {
    data() {
        return {
            status: '1',
            loginOrRegiste : 'login',
            
            isLogin : true,
            title: {
                login : '登录',
                registe :'注册',
                loginInput :'',
            },
            user : {
                name: '',
                password : ''
            },
            registeForm: {
              password: '',
              name: '',
              checkPass: '',//检查代码
              level : ''
            },
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        registe() {//切换注册
            this.loginOrRegiste = 'registe'
            this.isLogin = false
        },
        changeStatus(s){
            this.status = s    
        },
        submitForm() {
            let formData = JSON.parse(JSON.stringify(this.registeForm));
            this.$axios.post('/api/user/add',formData)
                .then((res)=>{
                    console.log(res);
                })
        },
        resetForm() {
          
        },
        goLogin () {//注册页返回登录页
          this.loginOrRegiste = 'login'
          this.isLogin = true;
        },
        loginUserName () {
            
            console.log('ok')
        },
        loginUserPwd () {

        }

    },
}