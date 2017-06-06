<template>
  <div class="admin-content">

    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">城市管理</strong> /
        <small>城市列表</small>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-md-6 am-cf">
        <div class="am-fl am-cf">
          <div class="am-btn-toolbar am-fl">
            <div class="am-btn-group am-btn-group-xs">
              <a type="button" class="am-btn am-btn-default" @click="refresh">
                <span class="am-icon-refresh am-icon-spin"></span> 刷新
              </a>
              <!--<router-link :to="{name:'city.add'}" class='am-btn am-btn-default'><span class="am-icon-plus"></span> 新增</router-link>-->
              <a type="button" class="am-btn am-btn-default" @click="showDialog">
                <span class="am-icon-plus"></span> 新增
              </a>
              <!--<button type="button" class="am-btn am-btn-default"><span class="am-icon-save"></span> 保存</button>-->
              <!--<button type="button" class="am-btn am-btn-default"><span class="am-icon-archive"></span> 审核</button>-->
              <button type="button" class="am-btn am-btn-default"><span class="am-icon-trash-o"></span> 删除</button>
            </div>

            <div class="am-form-group am-margin-left am-fl">
              <select>
                <option value="option1">所有类别</option>
                <option value="option2">IT业界</option>
                <option value="option3">数码产品</option>
                <option value="option3">笔记本电脑</option>
                <option value="option3">平板电脑</option>
                <option value="option3">只能手机</option>
                <option value="option3">超极本</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="am-u-md-3 am-cf">
        <div class="am-fr">
          <div class="am-input-group am-input-group-sm">
            <input type="text" class="am-form-field">
            <span class="am-input-group-btn">
                  <button class="am-btn am-btn-default" type="button">搜索</button>
                </span>
          </div>
        </div>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-sm-12">
        <form class="am-form">
          <table class="am-table am-table-striped am-table-hover table-main">
            <thead>
            <tr>
              <th class="table-check"><input type="checkbox"></th>
              <!--<th class="table-id">ID</th>-->
              <th class="table-type">名称</th>
              <th class="table-title">拼音</th>
              <th class="table-date">添加时间</th>
              <th class="table-set">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="city in cities">
              <td><input type="checkbox"></td>
              <!--<td :title='city.id'>{{ city.id | limit }}</td>-->
              <td :title='city.name'><a href="#">{{ city.name }}</a></td>
              <td :title='city.title'>{{ city.pinyin }}</td>
              <td :title='city.createdAt'>{{ city.createdAt }}</td>
              <td>
                <div class="am-btn-toolbar">
                  <div class="am-btn-group am-btn-group-xs">
                    <a class="am-btn am-btn-default am-btn-xs am-text-secondary">
                      <span class="am-icon-pencil-square-o"></span> 编辑
                    </a>
                    <a class="am-btn am-btn-default am-btn-xs"><span class="am-icon-copy"></span> 复制</a>
                    <a class="am-btn am-btn-default am-btn-xs am-text-danger" @click="delCity(city.id)">
                      <span class="am-icon-trash-o"></span>删除
                    </a>
                  </div>
                </div>
              </td>
            </tr>

            </tbody>
          </table>
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

    <!-- 添加城市 -->
    <div class="am-modal am-modal-prompt" tabindex="-1" id="modal-city-add">
      <div class="am-modal-dialog">
        <div class="am-modal-hd">添加城市</div>
        <hr>
        <div class="am-modal-bd">
          <form class="am-form am-form-horizontal">
            <div class="am-form-group">
              <label for="site-name" class="am-u-sm-4 am-form-label">城市名称 / Name</label>
              <div class="am-u-sm-8">
                <input type="text" id="site-name" placeholder="站点名称 / Name" v-model="city.name">
              </div>
            </div>
          </form>
        </div>
        <div class="am-modal-footer">
          <span class="am-modal-btn" data-am-modal-cancel>取消</span>
          <span class="am-modal-btn" data-am-modal-confirm>提交</span>
        </div>
      </div>
    </div>

  </div>
</template>
<style>

</style>
<script>
  import Vue from "vue";
  import API from "../../apis/index";
  import limit from "../../filters/limit"

  let vm = {};

  export default {
    data(){
      let cities = [];
      let city = {name: ""};
      return {
        cities,
        city
      }
    },
    filters: {
      limit: limit
    },
    methods: {
      /**
       *  显示添加城市对话框
       */
      showDialog: ()=> {
        $('#modal-city-add').modal({
          relatedTarget: this,
          onConfirm: function (e) {
            if (vm.city.name && vm.city.name.length > 0) {
              vm.addCity();
            }
            return false;
          },
          onCancel: function (e) {
          }
        });
      },

      /**
       *  添加城市
       */
      addCity: async()=> {
        let response = await API.City.save(vm.city);
        if (response.ok) {
          vm.queryCities();
          layer.msg('添加成功！');
        } else {
          layer.msg('添加失败！')
        }
      },


      /**
       *  删除城市
       */
      delCity: async(id)=> {
        let response = await API.City.delete({id: id});
        if (response.ok) {
          layer.msg('删除成功！');
          vm.queryCities();
        } else {
          layer.msg('删除失败！')
        }
      },

      /**
       * 查询城市列表
       */
      queryCities: async() => {
        let response = await API.City.query();
        if (response.ok) {
          vm.cities = response.data;
        }
      },
      refresh: ()=>{

        vm.queryCities();
      }
    },
    beforeCreate()
    {
      vm = this;
    },
    caeated()
    {
    },
    beforeMounted()
    {
    },
    mounted()
    {
      vm.queryCities();
    }
  };
</script>
