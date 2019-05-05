
export default {
    data() {
        return {
            imageUrl: '',//图片上传
            dialogFormVisible: false,//编辑模态框开关
            currentPage: 1, //分页数 
            dialogVisible: false, //删除提示框
            tableData:
             [{
                id : 1,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                id : 2,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                id : 3,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                id : 4,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              },{
                id : 5,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }],
              form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
                },
                formLabelWidth: '120px',
                ruleForm: {
                  name: '', //名称
                  category: '',//类别
                  desc: '',//描述
                  publishingHouse : '',//出版社
                  number : 0,//数量
                  img : ''
                },
                rules: {
                  name: [
                    { required: true, message: '请输入图书名字', trigger: 'blur' },
                    { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
                  ],
                  category: [
                    { required: true, message: '请选择书籍类别', trigger: 'change' }
                  ],
                  publishingHouse: [
                    { required: true, message: '请输入出版社信息', trigger: 'blur' }
                  ],
                  number: [
                    { required: true, message: '数量不能为空', trigger: 'blur' },
                    { type: 'number', message: '年龄必须为数字值'}
                  ],
                  desc: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                  ],
                  img: [
                    { required: true, message: '请上传一张书籍图片', trigger: 'blur' }
                  ]
          
              }
              
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
            this.dialogFormVisible = true;
            console.log(this.dialogFormVisible)
        },
        handleDelete(index, row) {
          //  this.dialogVisible = true;
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success'
              });
            }).catch(() => {
              this.$notify({
                type: 'info',
                message: '已取消删除'
              });          
            });
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        resetForm(formName) {//重置
          this.$refs[formName].resetFields();
        },
         //上传图片
         handleAvatarSuccess(res, file) {
          this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isPng = file.type === 'image/png';
          console.log(file.type)
          const isLt2M = file.size / 1024 / 1024 < 2;
  
          if (!(isJPG&&isPng)) {
            this.$message.error('上传头像图片只能是 JPG和 PNG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        },
        //上传图片结束
        submitForm(formName) {//提交表单
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
    }

}