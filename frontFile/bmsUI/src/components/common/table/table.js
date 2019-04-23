
export default {
    data() {
        return {
            currentPage: 4, //分页数 
            tableData:
             [{
                img: 'null',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                img: 'null',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                img: 'null',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }, {
                img: 'null',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              },{
                img: 'null',
                name: 'javascript高级编程',
                press : 'XX教育出版社',
                number: '5'
              }]
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }

    }

}