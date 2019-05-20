// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont/iconfont.css'
import axios from 'axios'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

axios.defaults.baseURL = "http://localhost:3000";

Vue.prototype.$axios = axios
Vue.prototype.isLogin = false;
// axios.defaults.withCredentials = true;
Vue.config.productionTip = false
Vue.prototype.HOST='/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      userName : '',
      level : ''
    }
  },
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
