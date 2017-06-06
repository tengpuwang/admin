/**
 * Created by shumin on 16-6-23.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes,
  linkActiveClass:''
});

export default router;
