<template>
  <div class="admin-content">
    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">城市管理</strong> /
        <small>添加城市</small>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-lg-8">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group">
            <label for="site-name" class="am-u-sm-3 am-form-label">城市名称 / Name</label>
            <div class="am-u-sm-9">
              <input type="text" id="site-name" placeholder="站点名称 / Name" v-model="city.name">
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
      let city = {
        "name": ""
      };
      let cities = [];
      return {
        city
      }
    },
    methods: {

      /**
       *
       */
      submit: async()=> {

//        vm.site.city = $("#site-city").val();
        let response = await API.City.save(vm.city);
        if (response.ok) {
          layer.msg('添加成功！');
        } else {
          layer.msg('添加失败！')
        }
      },
      cancel: ()=> {
        vm.$router.back();
      },

    },
    beforeCreate(){
      vm = this;
    },
    caeated(){
    },
    mounted(){
    }
  };
</script>
