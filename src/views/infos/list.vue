<template>
  <div class="admin-content">

    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">信息管理</strong> /
        <small>信息列表</small>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-md-6 am-cf">
        <div class="am-fl am-cf">
          <div class="am-btn-toolbar am-fl">
            <div class="am-btn-group am-btn-group-xs">
              <a type="button" class="am-btn am-btn-default am-btn-secondary" @click="refresh">
                <span class="am-icon-refresh am-icon-spin"></span> 刷新
              </a>
              <router-link :to="{name:'info.add'}" class='am-btn am-btn-default am-btn-success'><span
                class="am-icon-plus"></span> 新增
              </router-link>
              <!--<button type="button" class="am-btn am-btn-default" @click=""><span class="am-icon-plus"></span> 新增</button>-->
              <!--<button type="button" class="am-btn am-btn-default"><span class="am-icon-save"></span> 保存</button>-->
              <!--<button type="button" class="am-btn am-btn-default"><span class="am-icon-archive"></span> 审核</button>-->
              <!--<button type="button" class="am-btn am-btn-default"><span class="am-icon-trash-o"></span> 删除</button>-->
            </div>
          </div>

          <div class="am-form-group am-margin-left am-fl">
            <label>行业分类：</label>
            <select data-placeholder="请选择行业分类" id="info-category" v-model="q.query.category">
              <option value="">请选择行业分类</option>
              <option v-for="item in industries" :value="item.name">{{ item.name }}</option>
            </select>
          </div>
        </div>
      </div>

      <div class="am-u-md-3 am-cf">
        <div class="am-fr">
          <div class="am-input-group am-input-group-sm">
            <input type="text" class="am-form-field" v-model="q.query.title">
            <span class="am-input-group-btn">
                  <button class="am-btn am-btn-default" type="button" @click="search">搜索</button>
                </span>
          </div>
        </div>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-sm-12">
        <form class="am-form">
          <div class="am-scrollable-horizontal">
            <table class="am-table am-table-striped am-table-compact am-table-hover am-text-nowrap table-main">
              <thead>
              <tr>
                <!--<th class="table-check"><input type="checkbox"></th>-->
                <!--<th class="table-id">ID</th>-->
                <th class="table-type"></th>
                <th class="table-type">标题</th>
                <th class="table-type">分类</th>
                <th class="table-title">面积</th>
                <th class="table-author">转让费</th>
                <th class="table-author">租金</th>
                <th class="table-author">区域商圈</th>
                <th class="table-author">地铁站点</th>
                <th class="table-date">状态</th>
                <th class="table-date">添加时间</th>
                <th class="table-set">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="info in infos">
                <!--<td><input type="checkbox"></td>-->
                <td><img :src="info.images[0]" class="" alt=""></td>
                <!--<td :title='info.id'>{{ info._id | limit}}</td>-->
                <td class="am-text-middle" :title='info.title'>{{ info.title | limit }}</td>
                <td class="am-text-middle" :title='info.category'>{{ info.category }}</td>
                <td class="am-text-middle" :title='info.estate.area'>{{ info.estate.area }}<span>m<sup>2</sup></span>
                </td>
                <td class="am-text-middle" :title='info.estate.transferFee'>{{ info.estate.transferFee }} <span>±</span>
                  {{ info.estate.offset }}<span>元</span>
                </td>
                <td class="am-text-middle" :title='info.estate.transferFee'>{{ info.estate.rental }}<span>元/月</span>
                </td>

                <td class="am-text-middle">{{ info.estate.district }}-{{ info.estate.shopArea }}</td>
                <td class="am-text-middle">{{ info.estate.subway }}-{{ info.estate.station }}</td>

                <td class="am-text-middle">{{ info.isTraded | trade }}</td>

                <td class="am-text-middle" :title='info.createdAt'>{{ info.createdAt }}</td>
                <td>
                  <div class="am-btn-toolbar">
                    <div class="am-btn-group am-btn-group-xs">
                      <!--<button class="am-btn am-btn-default am-btn-xs am-text-secondary">-->
                      <!--<span class="am-icon-pencil-square-o"></span>编辑-->
                      <!--</button>-->
                      <button class="am-btn am-btn-default am-btn-xs am-text-danger" @click="removeInfo(info.id)">
                        <span class="am-icon-trash-o"></span>删除
                      </button>
                    </div>
                  </div>
                </td>
              </tr>

              </tbody>
            </table>
          </div>
          <div class="am-cf">
            共 15 条记录
            <div class="am-fr">
              <ul class="am-pagination">
                <li class="am-disabled"><a href="#">«</a></li>
                <li class="am-active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">»</a></li>
              </ul>
            </div>
          </div>
          <hr>
          <p>注：.....</p>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
  img {
    width: 80px;
    height: 60px;
    overflow: hidden;
  }
</style>
<script>
  import Vue from "vue";
  import API from "../../apis/index";
  import limit from "../../filters/limit"

  import InfoTypes from "../../assets/datas/dict/info-types.json"
  import Industries from "../../assets/datas/dict/industries.json"
  import EstateTypes from "../../assets/datas/dict/estate-types.json"

  import {API_ROOT} from '../../config'

  import _ from 'lodash'

  let vm = {};
  let store = $.AMUI.store;
  export default {

    data(){

      // 当前站点Id
      let current_site_id = store.get("current_site_id");

      let infos = [];
      let sites = [];
      // 当前选择的站点
      let selected_site = {};
      // 信息类型
      let infoTypes = InfoTypes;
      // 行业分类
      let industries = Industries;
      // 物业类型
      let estateTypes = EstateTypes;

      // 查询条件
      let q = {
        query: {
          site: current_site_id,
          category: "",
          infoType: "Attorn",
          estateType: "Store",
          infoSource: "TENGPU"
        },
        sort: {
          createdAt: 1
        },
        page: {
          index: 1,
          size: 9999
        }
      };

      return {
        sites,
        infos,
        selected_site,
        industries,
        q
      }

    },
    filters: {
      trade: (value) => {
        return value ? "已成交" : "未成交";
      }
    },
    methods: {

      querySites: async() => {
        let response = await API.Site.query();
        if (response.ok) {
          vm.sites = response.data;
          Vue.nextTick(function () {
            $("select").trigger('chosen:updated');
          });
        }
      },

      queryInfos: async() => {
//        let response = await API.Info.query();
//        if (response.ok) {
//          vm.infos = response.data;
//        }

        // 去除空的查询条件
        let q = _.cloneDeep(vm.q);
        if (_.isEmpty(q.query.category)) {
          let query = _.omit(vm.q.query, 'category');
          q.query = query;
        }
        let url = API_ROOT + "/infos?q=" + JSON.stringify(q);
        $.get(url, function (result) {
          vm.infos = result.pageDatas;
          console.log(result)
        });
      },

      // 删除信息
      removeInfo: async(id) => {
        console.log("id:" + id);
        let response = await API.Info.remove({id: id});
        if (response.ok) {
          vm.queryInfos();
        }
      },

      search: () => {
        vm.queryInfos();
      },

      refresh: () => {
      }

    },
    beforeCreate(){
      vm = this;
    },
    caeated(){
    },
    beforeMounted(){
    },
    async mounted(){
      $("select").chosen();
      // 查询站点列表;
      await vm.querySites();
      await vm.queryInfos();

      // 选择行业分类
      $('#info-category').on('change', function (e, params) {
        let category = params.selected;
        vm.q.query.category = category;
      });

    }
  };
</script>
