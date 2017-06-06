<template>
  <header class="am-topbar admin-header">
    <div class="am-topbar-brand">
      <strong>TengPu</strong>
      <small>腾铺网-后台管理系统</small>
    </div>

    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
            data-am-collapse="{target: '#topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
      class="am-icon-bars"></span></button>

    <div class="am-collapse am-topbar-collapse" id="topbar-collapse">

      <ul class="am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list">
        <li>
          <a>
            <label for="curr-site-city">站点城市：</label>
            <select data-placeholder="请选择站点" id="curr-site-city" v-model="current_site_id">
              <option>请选择站点</option>
              <option v-for="site in sites" :value="site.id">{{ site.name }}</option>
            </select>
          </a>
        </li>
        <li>
          <a href="javascript:;" id="admin-fullscreen">
            <span class="am-icon-arrows-alt"></span>
            <span class="admin-fullText">开启全屏</span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
  import Vue from "vue";
  import API from "../../apis/index";
  let vm = {};
  let store = $.AMUI.store;
  export default {
    data() {
      let sites = [];
      let current_site_id = store.get("current_site_id");
      return {
        sites,
        current_site_id
      }
    },
    methods: {
      querySites: async() => {
        let response = await API.Site.query();
        if (response.ok) {
          vm.sites = response.data;
          if (!vm.current_site_id) {
            let current_site = vm.sites[0];
            vm.current_site_id = current_site.id;
            store.set("current_site_id", vm.current_site_id);
          }
          Vue.nextTick(function () {
            $("select").trigger('chosen:updated');
          });
        }
      }
    },
    beforeCreate() {
      vm = this;
    },
    async mounted() {
      $("select").chosen();
      // 查询站点列表;
      await vm.querySites();
      // 选择站点时触发事件
      $('#curr-site-city').on('change', function (e, params) {
        let site_id = params.selected;
        vm.current_site_id = site_id;
        store.set("current_site_id", vm.current_site_id);
        // 刷新当前页面
        vm.$router.go(0);
      });

      var $fullText = $('.admin-fullText');
      $('#admin-fullscreen')
        .on('click', function () {
          $.AMUI.fullscreen.toggle();
        });

      $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function () {
        $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
      });
    }
  };
</script>
