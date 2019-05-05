export default {
    data() {
        return {
            dialogFormVisible: false,//修改模态框开关
            dialogTableVisible : false,//我的收藏开关
            userInfo: {
                name : '',
                possword : '',
                phone : '',
                email : ''

            },
            formLabelWidth :'90px',
            collectInfo: [{
                bookName: 'qqq',
                author: '王小虎',
                magazine: '其他',
                press : 'xxx出版社'
              }, {
                bookName: 'qqq',
                author: '王小虎',
                magazine: '其他',
                press : 'xxx出版社'
              }],
        }
    },
    methods: {
        changeUserInfo () {
            this.dialogFormVisible = true;
        },
        handelCollect () {
            this.dialogTableVisible = true;
        }
    },
}