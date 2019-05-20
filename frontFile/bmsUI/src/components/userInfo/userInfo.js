export default {
    data() {
        //验证信息
        var validatePass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              if (this.userInfo.checkPwd !== '') {
                this.$refs.userInfo.validateField('checkPwd');
              }
              callback();
            }
          };
          var validatePass2 = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请再次输入密码'));
            } else if (value !== this.userInfo.password) {
              callback(new Error('两次输入密码不一致!'));
            } else {
              callback();
            }
        };
        return {
            dialogRemindVisible : false,
            dialogFormVisible: false,//修改模态框开关
            dialogTableVisible : false,//我的收藏开关
            userInfo: {},
            formLabelWidth :'90px',
            collectInfo: [],
              rules2: {
                userName: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                  ],
                  phone: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' }
                  ],
                  email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' }
                  ],
                  
                password: [
                  { validator: validatePass, trigger: 'blur' }
                ],
                checkPwd: [
                  { validator: validatePass2, trigger: 'blur' }
                ],
              },
            remindInfo: [

            ]
        }
    },
    mounted() {
        this.getAllUser();
        this.getRemindInfo();
        this.getCllectInfo();
    },
    methods: {
        getCllectInfo () {//获取收藏信息
          this.$axios.get('/api/collect/list',{
            params: {  
              search : this.$store.state.User.userName
            }
          }).then((res)=>{
            this.collectInfo = res.data.data.items;
          }).catch((res)=>{
            console.log(err)
          })
        },
        getAllUser () {//获取信息      
            this.$axios.get('/api/user/listone',{
                params: {  
                    userName : this.$store.state.User.userName
                }
            })
                .then((res)=>{
                    this.userInfo = res.data.data[0]
                })
        },
        submitEditForm(formName) {//提交修改表单
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let formData = JSON.parse(JSON.stringify(this.userInfo));
                    this.$axios.post('/api/user/edit',formData)
                        .then((res)=>{
                            this.$notify({
                                title: '成功',
                                message: '修改 成功',
                                type: 'success'
                              });
                            this.dialogFormVisible = false
                        })
                } else {
                  console.log('error submit!!');
                  return false;
                }
              });
              
            // this,$axios.post()
            // this.dialogFormVisible = false
        },
        getRemindInfo () {
          this.$axios.get('/api/remind/list',{
            params: {  
              search : this.$store.state.User.userName
            }
          }).then((res)=>{
            console.log(res)
            this.remindInfo = res.data.data.items;
          })
        },
        delateCollect(index, row){
          this.$axios.get('/api/collect/delate',{
            params: {  
              _id : row._id
            }
          }).then((res)=>{
            console.log(res);
            this.$notify({
              title: '成功',
              message: '取消收藏成功',
              type: 'success'
            });
            this.getCllectInfo();
          }).catch((err)=>{
            console.log(err)
          })
        },
        returnBook (index,row) {
          console.log(this.remindInfo)
          console.log(row)
          row.isReturn = true;
          console.log(row)
          let formData = JSON.parse(JSON.stringify(row));
          this.$axios.get('/api/remind/delate',{
            params: {  
              id: row._id,
            }
          })
            .then((res)=>{
              console.log(res)
              this.$notify({
                title: '成功',
                message: '已还书，请等待管理员确认',
                type: 'success'
              });
              this.getRemindInfo();
            })
            .catch((err)=>{
              console.log(err)
            })
        },
        changeUserInfo () {
            this.dialogFormVisible = true;
        },
        handelCollect () {
            this.dialogTableVisible = true;
        },
        handelRemind () {
            this.dialogRemindVisible = true;
        }
    },
}