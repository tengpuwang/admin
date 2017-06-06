<template>
  <div class="admin-sidebar">
    <ul class="am-list admin-sidebar-list">
      <li>
        <a href="admin-index.html">
          <span class="am-icon-home"></span>
          首页
        </a>
      </li>
      <li class="admin-parent">
        <a class="am-cf" data-am-collapse="{target: '#info-nav'}">
          <span class="am-icon-file"></span>
          信息管理
          <span
            class="am-icon-angle-right am-fr am-margin-right"></span>
        </a>
        <ul class="am-list am-collapse admin-sidebar-sub am-in" id="info-nav">
          <li>
            <router-link :to="{name:'info.list'}" class="am-cf">
              <span class="am-icon-puzzle-piece"></span>
              信息管理
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'info.add'}" class="am-cf">
              <span class="am-icon-puzzle-piece"></span>
              添加信息
            </router-link>
          </li>
        </ul>
      </li>
      <li class="admin-parent">
        <a class="am-cf" data-am-collapse="{target: '#adsense-nav'}">
          <span class="am-icon-file"></span>
          广告推荐
          <span
            class="am-icon-angle-right am-fr am-margin-right"></span>
        </a>
        <ul class="am-list am-collapse admin-sidebar-sub am-in" id="adsense-nav">
          <li v-for="(adsense,index) in adsenses">
            <router-link :to="{ name: 'adsenses.list', params: {index:adsense.id} }" class="am-cf">
              <!--<span class="am-icon-check">  </span>-->
              {{ index +1 }}-{{ adsense.intro}}
              <span class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
            </router-link>
          </li>
        </ul>
      </li>
      <li class="admin-parent">
        <a class="am-cf" data-am-collapse="{target: '#collapse-nav'}">
          <span class="am-icon-file"></span>
          系统管理
          <span
            class="am-icon-angle-right am-fr am-margin-right"></span>
        </a>
        <ul class="am-list am-collapse admin-sidebar-sub am-in" id="collapse-nav">
          <li>
            <router-link :to="{name:'site.list'}" class="am-cf">
              <span class="am-icon-check"></span>
              站点管理
              <span
                class="am-icon-star am-fr am-margin-right admin-icon-yellow"></span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'city.list'}" class="am-cf">
              <span class="am-icon-puzzle-piece"></span>
              城市管理
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="admin-table.html">
          <span class="am-icon-table"></span>
          表格
        </a>
      </li>
      <li>
        <a href="admin-form.html">
          <span class="am-icon-pencil-square-o"></span>
          表单
        </a>
      </li>
      <li>
        <a href="#">
          <span class="am-icon-sign-out"></span>
          注销
        </a>
      </li>
    </ul>

    <div class="am-panel am-panel-default admin-sidebar-panel">
      <div class="am-panel-bd">
        <p>
          <span class="am-icon-bookmark"></span>
          公告
        </p>
        <p>时光静好，与君语；细水流年，与君同。—— Amaze</p>
      </div>
    </div>

    <div class="am-panel am-panel-default admin-sidebar-panel">
      <div class="am-panel-bd">
        <p>
          <span class="am-icon-tag"></span>
          wiki
        </p>
        <p>Welcome to the Amaze</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Adsenses from "../../assets/datas/dict/adsenses.json"
  let vm = {};

  export default {

    data(){
      let adsenses = Adsenses;
      return {
        adsenses
      }
    },
    filters: {},
    methods: {},
    beforeCreate(){
      vm = this;
    },
    caeated(){
    },
    beforeMounted(){
    },
    async mounted(){
    }
  };
</script>
