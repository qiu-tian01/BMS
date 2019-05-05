import Sreach from '@components/common/sreach/sreach.vue'
import Table from '@components/common/table/table.vue'

export default {
    components : {Sreach,Table},
    data() {
        return {
            dialogVisible : false,//详情模态框
            currentPage: 1, //分页数 
            bookIntrofuction : '',
            tableData:
             [{
                id : 1,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5',
                introduction : '这是一本书'
              }, {
                id : 2,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5',
                introduction : '这是一本书'
              }, {
                id : 3,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5',
                introduction : '这是一本书'
              }, {
                id : 4,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5',
                introduction : '这是一本书'
              },{
                id : 5,
                img: 'null',
                magazine : '教育',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5',
                introduction : '这是一本书'
              }]
        }
    },
    methods: {
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