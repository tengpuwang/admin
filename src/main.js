// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import "../static/css/amazeui.min.css"
import "../static/css/amazeui.chosen.css"
// import "../static/css/amazeui.tree.css"
import "../static/css/admin.css"
import "../static/css/app.css"
import "../static/plugins/webuploader/webuploader.css"
// import "../static/plugins/address/dist/amazeui.address.css"


import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/app.vue';
import router from './router.js'

Vue.use(VueRouter);

import limit from './filters/limit'
// 注册 过滤器
Vue.filter('limit', function (value) {
  return value.substring(0, 10);
});

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
