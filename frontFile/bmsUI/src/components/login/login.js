export default {
    data() {
        return {
            checkIsUser : false,
            checkLoginUserName : false,
            checkLoginUserPwd : false,
            checkSuccessLogin : false,
            registeUerName : false,
            registeUerNameLength : false,
            registeUserpwd : false,
            registeCheckPwd :false,
            registeCheckPwdLength : false,
            registeCheckPwdBoth :false,
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
                password : '',
                level : '',
            },
            registeForm: {
                password: '',
                userName: '',
                checkPwd: '',//检查代码
                level : ''
            },
        }
    },
    mounted() {
        this.changeStatus();
    },
    methods: {
        //检测内容
        loginUserName () {
            if(this.user.name == ''){
                this.checkLoginUserName = true
            }else{
                this.checkLoginUserName = false
            }
        },
        loginUserPwd () {
            if(this.user.password == ''){
                this.checkLoginUserPwd = true
            }else{
                this.checkLoginUserPwd = false
            }
        },
        checkUserName () {
            if(this.registeForm.userName == ''){
                this.registeUerName = true;
            }else{
                this.registeUerName = false;
            }
            if(this.registeForm.userName.length > 10){
                this.registeUerNameLength = true
            }else{
                this.registeUerNameLength = false;
            }
        },
        checkUserPwd () {
            if(this.registeForm.password == ''){
                this.registeUserpwd = true;
            }else{
                this.registeUserpwd = false;
            }
            if(this.registeForm.password.length > 12 || this.registeForm.password.length<5){
                this.registeCheckPwdLength = true
            }else{
                this.registeCheckPwdLength = false
            }
        },
        checkUserPwdBoth () {
            if(this.registeForm.checkPwd == ''){
                this.registeCheckPwd = true;
            }else{
                this.registeCheckPwd = false;
            }   
            if(this.registeForm.checkPwd != this.registeForm.password){
                this.registeCheckPwdBoth = true
            }else{
                this.registeCheckPwdBoth = false
            }
        },
        onSubmit() {//登录按钮      
            this.$axios.get('/api/user/listone',{
                params:{
                    userName : this.user.name,
                    level : this.user.level
                }
            }).then((res)=>{
                console.log()
                if(res.data.data.length == 0){
                    if(this.user.name == ''){
                        this.checkLoginUserName = true
                    }else{
                        this.checkIsUser = true;
                        this.checkSuccessLogin = false;
                    }
                    
                }else if(res.data.data[0].password != this.user.password){
                    if(this.user.password == ''){
                        this.checkLoginUserPwd = true
                    }else{
                        this.checkSuccessLogin = true;
                    }
                    this.checkIsUser = false;
                }else{
                    if(this.user.password == ''){
                        this.checkLoginUserPwd = true
                    }else{
                        this.checkIsUser = false;
                        this.checkLoginUserName = false
                        this.checkLoginUserPwd = true
                        this.isLogin = true;
                        localStorage.setItem("userInfo",this.user.name+this.user.leve)
                        this.$store.dispatch('setUserName',this.user.name)
                        this.$store.dispatch('setLevel',this.user.level)
                        this.$store.dispatch('setIsLogin',true)
                        this.$router.push('/')
                        
                        this.$level = this.user.level;
                    }
                       
                }
            }).catch((res)=>{
                console.log(err)
            })  
            this.$root.userName=this.user.userName;
            this.$root.level = this.user.level;      
        },
        registe() {//切换注册
            this.loginOrRegiste = 'registe'
            this.isLogin = false
        },
        changeStatus(s){//更改登陆者权限
            this.status = s    
            this.registeForm.level = s;
            this.user.level = s;
            
        },
        submitForm() {//提交注册
            this.checkUserName ()
            this.checkUserPwd ()
            this.checkUserPwdBoth ()
            let formData = JSON.parse(JSON.stringify(this.registeForm));
            let bothUser = false;
            if(localStorage.getItem(this.registeForm.userName+this.registeForm.level)){
                bothUser = true;
                this.$notify({
                    title: '警告',
                    message: '用户名已存在',
                    type: 'warning'
                  });
            } else if(bothUser == false &&this.registeUerName == false&&this.registeUerNameLength == false&&this.registeUserpwd == false&&this.registeCheckPwdLength == false &&this.registeCheckPwd == false&&this.registeCheckPwdBoth == false){
                this.$axios.post('/api/user/add',formData)
                .then((res)=>{
                    console.log(res)
                    this.$notify({
                        title: '成功',
                        message: '注册成功啦',
                        type: 'success'
                      });
                    localStorage.setItem(this.registeForm.userName+this.registeForm.level, this.registeForm.password);
                    this.goLogin ();
                })
            }else {
                this.$notify({
                    title: '警告',
                    message: '请正确操作哟',
                    type: 'warning'
                  });
                return;
                
            }
            
        },
        resetForm() {
          
        },


        goLogin () {//注册页返回登录页
          this.loginOrRegiste = 'login'
          this.isLogin = true;
        },

    },
}