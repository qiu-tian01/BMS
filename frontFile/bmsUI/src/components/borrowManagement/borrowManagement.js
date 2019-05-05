
export default {

    data() {
        return {
            currentPage : 1,
            isShowReset :false,//判断重置按钮出现
            sreachData : '',
            tableData:
            [{
               id : 1,
               name: 'javascript高级编程',
               user : 'qqq',
               startDate: '2019/01/01',
               endDate : '2019/01/02',
               remainingDate: '1'
             }, {
               id : 2,
               name: 'javascript高级编程',
               user : 'qqq',
               startDate: '2019/01/01',
               endDate : '2019/01/02',
               remainingDate: '1'
             }, {
               id : 3,
               name: 'javascript高级编程',
               user : 'qqq',
               startDate: '2019/01/01',
               endDate : '2019/01/02',
               remainingDate: '1'
             }]
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
        handleRemind () {
            this.$notify({
                title: '成功',
                message: '提醒用户成功',
                type: 'success'
            });
        }
    },
}