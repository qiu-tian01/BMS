export default {
    data() {
        return {
            isShowReset :false,//判断重置按钮出现
        }
    },
    props :['value'],
    mounted() {
        
    },
    computed:{
		newValue: {
			get:function() {
				return this.value; 
			},
			set:function(value) {
			  	this.$emit('input', value);
			}
		}
    },
    methods: {
        getSearchList () {
            console.log('ok')
            this.$axios.get('/api/books/list',{
                params: {  
                    search: this.value,
                  }    
            }).then((res)=>{
                this.$emit('getSearchList',res.data.data.items)
            })
        },
        submitSreach (){//提交搜索
            this.getSearchList ()
            // if(this.sreachData != ''){
            //     this.isShowReset = true
            // }
        },
        resetInput () {//重置按钮
            this.sreachData = ''
            this.isShowReset = false
        },
        
    },
}