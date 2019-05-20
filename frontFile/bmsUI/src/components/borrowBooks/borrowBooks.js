import Sreach from '@components/common/sreach/sreach.vue'
export default {
  components : {Sreach},
    data() {
        return {
            searchValue :'',
            data: '',
            dialogFormVisible : false,
            currentPage: 1, //分页数 
            pagesize:10,    //    每页的数据
            isShowReset :false,//判断重置按钮出现
            sreachData : '',
            tableData:[],
              borrowBokkInfo : {
                user: '',
                bookName :'',
                startTime : '',
                endTime : '',
                remainTime : '',
                isReturn :false,
                isRemind : false
              },
              collectInfo : {
                user : '',
                bookName : "",
                category : "",
                press : "",
                author : "",
                
              }
        }
    },
    mounted() {
      this.getAllList()
    },
    methods: {
        resetInput () {//重置按钮
            this.sreachData = ''
            this.isShowReset = false
            
        },
        getAllList () {
          this.$axios.get('/api/books/listAll')
            .then((res)=>{
              this.tableData = res.data.data;
            })
            .catch(function(err){
              console.log(err)
            })
        },
          getSTime(val) {//设置时间
            let d=new Date(val);//这个sTime是在data中声明的，也就是v-model绑定的值
            this.borrowBokkInfo.startTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          },
          getETime (val) {//设置借宿时间
            let d=new Date(val);//这个sTime是在data中声明的，也就是v-model绑定的值
            this.borrowBokkInfo.endTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
          },
          submitBorrowInfo() {//借阅图书
            this.borrowBokkInfo.user = this.$store.state.User.userName;
            //计算剩余时间
            let time1 = new Date(this.borrowBokkInfo.startTime)
            let time2 = new Date(this.borrowBokkInfo.endTime)
            let s1 = time1.getTime(),s2 = time2.getTime();
            let total = (s2 - s1)/1000;
            let day = parseInt(total / (24*60*60));//计算整数天数
            this.borrowBokkInfo.remainTime = day;
            let formData = JSON.parse(JSON.stringify(this.borrowBokkInfo));
             this.$axios.post('/api/borrows/add',formData)
                .then((res)=>{
                  this.$notify({
                    title: '成功',
                    message: '借阅成功',
                    type: 'success'
                  });
                  this.dialogFormVisible = false
                }).catch((err)=>{
                  console.log(err)
                })
           
          },
        getSeachList (val) {//搜索
            this.tableData = val;
        },
        handleSizeChange(val) {
          this.pagesize = val;
          this.currentPage=1
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        },
        handleBorrowBook (index,row) {
          this.dialogFormVisible = true;
          this.borrowBokkInfo.bookName = row.bookName;
        },
        handleCollectBook (index,row) {
          this.collectInfo.user = this.$store.state.User.userName;
          this.collectInfo.bookName = row.bookName;
          this.collectInfo.category = row.category;
          this.collectInfo.press = row.press;
          this.collectInfo.author = row.author;
          let formData = JSON.parse(JSON.stringify(this.collectInfo));
          this.$axios.post('/api/collect/add',formData)
            .then((res)=>{
              console.log(res)
              this.$notify({
                title: '成功',
                message: '收藏成功',
                type: 'success'
              });
            }).catch((err)=>{
              console.log(err)
            })
          
        }
    },
}