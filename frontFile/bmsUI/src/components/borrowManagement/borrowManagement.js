
export default {

    data() {
        return {
            isRemind : false,
            currentPage : 1,
            pagesize:10,    //    每页的数据
            isShowReset :false,//判断重置按钮出现
            sreachData : '',
            tableData:[],
            remindInfo : {
                user : '',
                bookName : '',
                startTime :'',
                endTime : '',
                remainTime :'',
                isReturn : false,
                isRemind : false
            }
        }
    },
    mounted() {
        this.getAllBorrowList();
    },
    methods: {
        getAllBorrowList () {
            this.$axios.get('/api/borrows/listAll')
                .then((res)=>{
                    console.log(res)
                    this.tableData = res.data.data;
                })
            
        },
        submitSreach (){//提交搜索
            if(this.sreachData != ''){
                this.isShowReset = true
            }
            this.$axios.get('/api/borrows/list',{
                params: {  
                    search: this.sreachData,
                }
            })
            .then((res)=>{
              this.tableData = res.data.data.items;
            })
            .catch(function(err){
              console.log(err)
            })
        },
        resetInput () {//重置按钮
            this.sreachData = ''
            this.getAllBorrowList();
            this.isShowReset = false
            
            
        },
        handleSizeChange(val) {
            this.pagesize = val;
            this.currentPage=1
        },
        handleCurrentChange(val) {
            this.currentPage = val;
        },
        handleRemind (index,row) {
            console.log(row)
            this.remindInfo.user = row.user;
            this.remindInfo.bookName = row.bookName;
            this.remindInfo.startTime = row.startTime;
            this.remindInfo.endTime = row.endTime;
            this.remindInfo.remainTime = row.remainTime;
            this.remindInfo.isReturn = false;
            this.remindInfo.isRemind = true;
            row.isRemind = true;
            let formData = JSON.parse(JSON.stringify(this.remindInfo));
            this.$axios.post('/api/remind/add',formData)
                .then((res)=>{
                    this.$notify({
                        title: '成功',
                        message: '提醒用户成功',
                        type: 'success'
                    });
                    
                    this.handleEditBorrow (index,row);
                })
                .catch((err)=>{
                    console.log(err)
                })
                
            
        },
        handleEditBorrow (index,row){//编辑借阅
            console.log(row)
            let formData = JSON.parse(JSON.stringify(row));
            this.$axios.post('/api/borrows/edit',formData)
                .then((res)=>{
                    console.log(res);
                })
                .catch((res)=>{
                    console.log(res)
                })
        }  ,
        delateRemindInfo (index,row){//删除借阅信息
            this.$axios.get('/api/borrows/delate',{
                params: {  
                    _id: row._id,
                }
            })
            .then((res)=>{
                this.$notify({
                    title: '成功',
                    message: '已确认还书',
                    type: 'success'
                });
                this.getAllBorrowList();
            })
            .catch((err)=>{
                console.log(err)
            })
        },
    },
}