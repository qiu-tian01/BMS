
export default {
    data () {
        return {
        }
    },
    computed: {
        userName(){
            return this.$store.state.User.userName
        },
        isAdmin() {
            return this.$store.state.User.level == 1 ? true : false
        }
    },
    methods: {
        cahngeIsLogin () {
            this.$store.dispatch('setIsLogin',false)
            this.$router.push('/login')
        }
    },
}