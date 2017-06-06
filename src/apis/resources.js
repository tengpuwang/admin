import Vue from 'vue'
import VueResource from 'vue-resource'
import Rrouter from '../router'
import {API_ROOT} from '../config'

Vue.use(VueResource);

// HTTP相关
Vue.http.options.crossOrigin = true;
Vue.http.options.emulateJSON = false;
Vue.http.options.emulateHTTP = false;

const API_VERSION = 'v1';

// 添加拦截器
Vue.http.interceptors.push(function (request, next) {

  $.AMUI.progress.start();
  // 弹出加载框
  // let loading = layer.load(1, {shade: [0.1, '#fff']});

  request.headers['Api-Version'] = API_VERSION;

  // 请求发送前的处理逻辑
  let _access_authority_token = localStorage.getItem("dataultra_access_authority_token");
  let _auth_token = localStorage.getItem("TengPu_auth_token");
  console.log('[TengPu] request before interceptors localStorage is :', localStorage);
  if (!!_auth_token) request.headers['Authorization'] = _auth_token;
  if (!!_access_authority_token) request.headers['X-Access-Authority'] = _access_authority_token;

  console.log('[TengPu] request is :', request);

  let _vm = this;

  next(function (response) {

    $.AMUI.progress.done();
    // 关闭加载框
    // layer.close(loading);

    if (401 === response.status) {
      console.log('[TengPu] there is no right to continue, need to login status is :', response.status);
      return Rrouter.go({name: 'login', replace: true});
    }
    if (403 === response.status) {
      console.log('[TengPu] there is no right to continue, need to login status is :', response.status);
      if (window.inform) window.inform({
        type: 'danger',
        detail: '您没有权限进行此操作, 请联系管理员为您开通！'
      });
    }
    if (401 === response.status) {
      console.log('[TengPu] there is no right to continue, need to login status is :', response.status);
      return window.Rrouter.go({name: 'login', replace: true});
    }
    if (500 === response.status) {
      console.log('[TengPu] there is no right to continue, need to login status is :', response.status);
      return window.Rrouter.go({name: 'login', replace: true});
    }

    // 请求发送后的处理逻辑
    console.log('[TengPu] response after interceptors handling, response is :', response);
    // 根据请求的状态，response参数会返回给successCallback或errorCallback
    return response;
  });

});

//站点
export const Sites = Vue.resource(API_ROOT + '/sites{/id}{/subject}');
//城市
export const Cities = Vue.resource(API_ROOT + '/cities{/id}{/subject}');
//信息
export const Infos = Vue.resource(API_ROOT + '/infos{/id}{/subject}');
//站点广告推荐
export const Adsenses = Vue.resource(API_ROOT + '/site{/id}/adsenses/{/index}');
//分类（信息/行业）
export const Categories = Vue.resource(API_ROOT + '/categories{/id}{/subject}');
//系统配置
export const Profiles = Vue.resource(API_ROOT + '/system/profiles{/id}{/subject}');
