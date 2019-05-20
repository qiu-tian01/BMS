
export default {
    data() {
        return {
            isAdmin :false,
            currentPage : 1,
            pagesize:10,    //    每页的数据
            isShowReset :false,//判断重置按钮出现
            sreachData : '',
            tableData:[

            ]
        }
    },
    mounted() {
      this.getAllUser();
    },
    methods: {
        getAllUser () {//获取用户列表
          this.$axios.get('/api/user/listAll')
              .then((res)=>{
                this.tableData = res.data.data;
              })
        },
        handleDelete(index, row) {//注销用户
          console.log(row)
          //  this.dialogVisible = true;
           this.$confirm('此操作将永久删除, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$axios.get('/api/user/delate',{
                params: {  
                  _id: row._id,
                }           
              }).then((res)=>{
                this.$notify({
                  title: '成功',
                  message: '注销成功',
                  type: 'success'
                });
                this.getAllUser ()
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

        submitSreach (){//提交搜索
          this.$axios.get('/api/user/list',{
            params: {  
              search: this.sreachData,
            }    
          }).then((res)=>{
             this.tableData = res.data.data.items;
          })
            if(this.sreachData != ''){
                this.isShowReset = true
            }
        },
        addblacklist (index,row) {//变为管理员
          row.level =  JSON.parse(JSON.stringify("1"));;
          let formData = JSON.parse(JSON.stringify(row));
          this.$axios.post('/api/user/edit',formData)
            .then((res)=>{
              console.log(res);
              this.getAllUser();
            }).catch((err)=>{
              console.log(err)
            })
        },
        changeAdmin (index,row) {
          row.level =  JSON.parse(JSON.stringify("2"));;
          let formData = JSON.parse(JSON.stringify(row));
          this.$axios.post('/api/user/edit',formData)
            .then((res)=>{
              console.log(res);
              this.getAllUser();
            }).catch((err)=>{
              console.log(err)
            })
        },
        resetInput () {//重置按钮
            this.sreachData = ''
            this.isShowReset = false
            this.getAllUser ()
        },
        handleSizeChange(val) {
          this.pagesize = val;
          this.currentPage=1
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        },

    },
}