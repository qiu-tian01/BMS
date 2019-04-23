export default {
    data() {
        return {
            isShowReset :false,//判断重置按钮出现
            sreachData : ''
        }
    },

    mounted() {
        
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
        }
    },
}