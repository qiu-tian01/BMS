
export default {

    data() {
        return {
            data: '',
            dialogFormVisible : false,
            currentPage: 1, //分页数 
            isShowReset :false,//判断重置按钮出现
            sreachData : '',
            tableData:
             [{
                id : 1,
                author: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                id : 2,
                author: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                id : 3,
                author: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                id : 4,
                author: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              },{
                id : 5,
                author: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }],
              borrowBokkInfo : {
                user: '',
                bookName :'',
                startData : '',
                endData : ''
              }
        }
    },
    methods: {
        submitSreach (){//提交搜索
            if(this.sreachData != ''){
                this.isShowReset = true
            }
        },
        resetInput () {//重置按钮
            this.sreachData = ''
            this.isShowReset = false
            
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleBorrowBook (index,row) {
          console.log(row)
          this.dialogFormVisible = true;
          this.borrowBokkInfo.bookName = row.name;
        },
        handleCollectBook () {
          this.$notify({
            title: '成功',
            message: '收藏成功',
            type: 'success'
          });
        }
    },
}