// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  // 如果引入这个方法报错，则引入下面方法
import jquery from 'jquery'

// import './mock/mock.js'   // Mock 模拟（开关）

window.jquery = window.$ = jquery

// var axios = require('axios')                            //反向代理，前端请求默认发送到的地址
// axios.default.baseURL = 'http://localhost:8080/api'


Vue.prototype.$api = api
// Vue.prototype.$axios = axios
Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
