import Sreach from '@components/common/sreach/sreach.vue'
import Table from '@components/common/table/table.vue'

var _this

export default {
    components : {Sreach,Table},
    data() {
        return {
            searchValue : '',
            imageUrl: '',//图片上传
            dialogFormVisible: false,//模态框开关
            dialogFormEditVisible: false,//编辑模态框开关
            currentPage: 1, //分页数 
            pagesize:10,    //    每页的数据
            dialogVisible: false, //删除提示框
            formLabelWidth: '120px',
            tableData : [],
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
        _this =this
        this.getAllBookInfo();
    },

    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },

          
      submitForm(formName) {//提交表单
        this.$refs[formName].validate((valid) => {
          let formData = JSON.parse(JSON.stringify(this.ruleForm));
          if (valid) {
            this.$axios.post('/api/books/add',formData)
            .then((res)=>{
               this.dialogFormVisible = false;
               this.$notify({
                title: '成功',
                message: '添加成功',
                type: 'success'
              });
              this.getAllBookInfo();
            })
            .catch((err)=>{
              console.log(err)
            })
          } else {
            return false;
          }
        }); 
      },
      getAllBookInfo () {//获取信息
        this.$axios.get('/api/books/listAll')
          .then((res)=>{
            this.tableData = res.data.data;
          })
      },

      resetForm(formName) { // 重置
        this.$refs[formName].resetFields();
      },
      handleEdit(index, row) { // 编辑图书信息
        this.ruleForm.id = row.id;
        this.ruleForm._id = row._id;
        this.ruleForm.bookName = row.bookName;
        this.ruleForm.author = row.author;
        this.ruleForm.category = row.category;
        this.ruleForm.press = row.press;
        this.ruleForm.bookNumber = row.bookNumber;
        this.ruleForm.introduction = row.introduction;
        this.dialogFormEditVisible = true;
        
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
        this.pagesize = val;
        this.currentPage=1
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      resetForm(formName) { // 重置
        this.$refs[formName].resetFields();
      },
      getSeachList (val) {
        this.tableData = val;
      },
      submitEditForm (formName) {
        console.log(formName)
        this.$refs[formName].validate((valid) => {
          let formData = JSON.parse(JSON.stringify(this.ruleForm));
          if (valid) {
            this.$axios.post('/api/books/edit',formData)
          .then((res)=>{
            this.getAllBookInfo()
            this.dialogFormEditVisible = false
            this.$notify({
              title: '成功',
              message: '编辑成功',
              type: 'success'
            });
          })
            .catch((err)=>{
              console.log(err)
            })
          } else {
            return false;
          }
        }); 
      }
    },

    
}