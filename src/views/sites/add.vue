<template>
  <div class="admin-content">
    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">站点管理</strong> /
        <small>添加站点</small>
      </div>
    </div>
    <div class="am-g">
      <div class="am-u-lg-8">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group">
            <label for="site-name" class="am-u-sm-3 am-form-label">站点名称 / Name</label>
            <div class="am-u-sm-9">
              <input type="text" id="site-name" placeholder="站点名称 / Name" v-model="site.name">
            </div>
          </div>

          <div class="am-form-group">
            <label for="site-title" class="am-u-sm-3 am-form-label">站点标题 / Title</label>
            <div class="am-u-sm-9">
              <input type="text" id="site-title" placeholder="站点标题 / Title" v-model="site.title">
            </div>
          </div>

          <div class="am-form-group">
            <label for="site-city" class="am-u-sm-3 am-form-label">站点城市 / City</label>
            <div class="am-u-sm-9">
              <select data-placeholder="请选择站点城市" id="site-city">
                <option value=""></option>
                <option v-for="city in cities" :value="city.id">{{ city.name }} - {{ city.pinyin }}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-email" class="am-u-sm-3 am-form-label">电子邮件 / Email</label>
            <div class="am-u-sm-9">
              <input type="email" id="user-email" placeholder="输入你的电子邮件 / Email" v-model="site.email">
              <small>邮箱你懂得...</small>
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-phone" class="am-u-sm-3 am-form-label">电话 / Telephone</label>
            <div class="am-u-sm-9">
              <input type="email" id="user-phone" placeholder="输入你的电话号码 / Telephone" v-model="site.phone">
            </div>
          </div>

          <div class="am-form-group">
            <label for="user-intro" class="am-u-sm-3 am-form-label">简介 / Intro</label>
            <div class="am-u-sm-9">
              <textarea class="" rows="5" id="user-intro" placeholder="输入个人简介" v-model="site.intro"></textarea>
              <small>250字以内写出你的一生...</small>
            </div>
          </div>

          <div class="am-form-group">
            <div class="am-u-sm-9 am-u-sm-push-3">
              <button type="button" class="am-btn am-btn-primary am-btn-xs" @click="submit">提交保存</button>
              <button type="button" class="am-btn am-btn-primary am-btn-xs" @click="cancel">放弃保存</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from "vue";
  import API from "../../apis/index";

  let vm = {};

  export default {
    data(){
      let site = {
        "title": "",
        "city": "",
        "name": "",
        "phone": "",
        "email": ""
      };
      let cities = [];
      return {
        site,
        cities
      }
    },
    methods: {
      /**
       *  添加保存
       */
      submit: async() => {
        debugger;
        vm.site.city = $("#site-city").val();
        let response = await API.Site.save(vm.site);
        if (response.ok) {
          layer.msg('添加成功！');
        } else {
          layer.msg('添加失败！')
        }
      },
      cancel: () => {
        vm.$router.back();
      },
      /**
       * 查询城市列表
       */
      queryCities: async() => {

        let response = await API.City.query();
        if (response.ok) {
          vm.cities = response.data;
          Vue.nextTick(function () {
            $("select").trigger('chosen:updated');
          });
        }
      }
    },
    beforeCreate(){
      vm = this;
    },
    caeated(){
    },
    mounted(){
      vm.queryCities();
      $("select").chosen();
      // 选择站点城市时触发事件
      $('#site-city').on('change', function (e, params) {
        let city = params.selected;
        vm.site.city = city;
      });
    }
  };
</script>
