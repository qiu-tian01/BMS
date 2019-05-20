export default {
  computed: {
    isAdmin() {
      return this.$store.state.User.level == 1 ? true : false
    },
    path () {
      return this.$route.path;

    }
  },
  mounted() {
    console.log(this.$route.path)
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }