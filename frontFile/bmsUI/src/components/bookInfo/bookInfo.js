import Sreach from '@components/common/sreach/sreach.vue'
import Table from '@components/common/table/table.vue'
var _this

export default {
    components : {Sreach,Table},
    data() {
        return {
            dialogVisible : false,//详情模态框
            currentPage: 1, //分页数 
            bookIntrofuction : '',
            tableData:[]
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
          this.$axios.get('/api/books/list')
            .then((res)=>{
              console.log(res.data.data.items)
              this.tableData = res.data.data.items;
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
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handlecollect (index,row) {
          this.$notify({
            title: '成功',
            message: '收藏成功',
            type: 'success'
          });
        }

    }
}