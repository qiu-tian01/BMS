
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
        addblacklist (index,row) {
            this.$confirm('是否加入黑名单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$notify({
                  type: 'success',
                  message: '操作成功!'
                });
              }).catch(() => {
                this.$notify({
                  type: 'info',
                  message: '已取消'
                });          
              });
        },
        logoffUser (index,row) {
            this.$confirm('是否注销此用户?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$notify({
                  type: 'success',
                  message: '操作成功!'
                });
              }).catch(() => {
                this.$notify({
                  type: 'info',
                  message: '已取消'
                });          
              });
        }

    },
}