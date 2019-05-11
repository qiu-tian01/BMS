
export default {
  
    props: ['tableData'],
    data() {
        return {
            searchValue : '',
            imageUrl: '',//图片上传
            dialogFormVisible: false,//编辑模态框开关
            currentPage: 1, //分页数 
            dialogVisible: false, //删除提示框
            formLabelWidth: '120px',
                ruleForm: {
                  id : '',//书籍编号
                  bookName: '', //名称
                  category: '',//类别
                  author : '',
                  introduction: '',//描述
                  press : '',//出版社
                  bookNumber : 1,//数量
                },
                rules: {
                  id: [
                    { required: true, message: '请输入书籍编号', trigger: 'blue' }
                  ],
                  bookName: [
                    { required: true, message: '请输入图书名字', trigger: 'blur' },
                  ],
                  author: [
                    { required: true, message: '请输入作者名称', trigger: 'blur' },
                  ],
                  category: [
                    { required: true, message: '请选择书籍类别', trigger: 'change' }
                  ],
                  press: [
                    { required: true, message: '请输入出版社信息', trigger: 'blur' }
                  ],
                  bookNumber: [
                    { required: true, message: '数量不能为空', trigger: 'blur' },
                    { type: 'number', message: '年龄必须为数字值'}
                  ],
                  introduction: [
                    { required: true, message: '请填写活动形式', trigger: 'blur' }
                  ],
          
              }
              
        }
    },
    mounted() {
      console.log(this.tableData)
    },
    methods: {
      getAllBookInfo () {//获取信息
        this.$axios.get('/api/books/list')
          .then((res)=>{
            this.tableData = res.data.data.items;
          })
      },

        handleEdit(index, row) {
            console.log(index, row);
            this.dialogFormVisible = true;
            console.log(this.dialogFormVisible)
        },
        handleDelete(index, row) {
          console.log(row)
          //  this.dialogVisible = true;
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$axios.get('/api/books/delate',{
                params: {  
                  id: row._id,
                }           
              }).then((res)=>{
                this.$notify({
                  title: '成功',
                  message: '删除成功',
                  type: 'success'
                });
                this.getAllBookInfo ()
              }).catch((err)=>{
                console.log(err)
              })
              
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