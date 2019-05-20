import Sreach from '@components/common/sreach/sreach.vue'
import Table from '@components/common/table/table.vue'
var _this

export default {
    components : {Sreach,Table},
    data() {
        return {
          currentPage: 1, //初始页
          pagesize:10,    //    每页的数据
            addComment : false,
            dialogCommentVisible : false,
            searchValue : '',
            dialogVisible : false,//详情模态框
            
            bookIntrofuction : '',
            tableData:[],
            commentList: [],
            commentInfo : {
              user : '',
              comments : '',
              bookId : ''

            }
        }
    },
    computed: {
      isAdmin() {
        return this.$store.state.User.level == 1 ? true : false
      },
      commentBookId () {
        return this.commentInfo.bookId;
      }
    },
    mounted() {
      _this =this;
      this.getAllList(); 
      
    },
    methods: {
        //获取列表
        getAllList () {
          console.log('ok')
          this.$axios.get('/api/books/listAll')
            .then((res)=>{
              this.tableData = res.data.data;
            })
            .catch(function(err){
              console.log(err)
            })
        },

        handleEdit(index, row) {
            console.log(index, row);
        },
        showIntrofuction(index, row) {
          this.bookIntrofuction = row.introduction;
          this.dialogVisible = true;
            console.log(index, row);
        },
        //分页
        handleSizeChange(val) {
            this.pagesize = val;
            this.currentPage=1
        },
        handleCurrentChange(val) {
          this.currentPage = val;
        },
        getSeachList (val) {
          this.tableData = val;
        },
        handleComment(index,row){
          console.log(row)
          this.dialogCommentVisible = true;
          this.commentInfo.bookId = row._id;
          this.getCommentList();
          
        },
        delateComment (id) {//删除评论
          this.$axios.get('/api/comment/delate',{
            params : {
              id : id
            }
          }).then((res)=>{
            this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success'
            });
            this.getCommentList();

          })
        },
        addComments () {//提交添加评论
          this.commentInfo.user = this.$store.state.User.userName;
          let formData = JSON.parse(JSON.stringify(this.commentInfo));
          this.$axios.post('/api/comment/add',formData)
            .then((res)=>{
              console.log(res)
              this.addComment = false;
              this.getCommentList();
            })
            .catch((err)=>{
              console.log(err);
            })
        },
        getCommentList(){//获取评论列表
          this.$axios.get('/api/comment/list',{
            params : {
              search : this.commentInfo.bookId
            }
          })
          .then((res)=>{
            this.commentList = res.data.data.items;
            console.log(this.commentList)
          })
          .catch((err)=>{
            console.log(err)
          })
        }
    }
}