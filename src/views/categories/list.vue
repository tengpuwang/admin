<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="admin-content">

    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">分类管理</strong> /
        <small>分类列表</small>
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
              <router-link :to="{name:'site.add'}" class='am-btn am-btn-default'><span class="am-icon-plus"></span> 新增
              </router-link>
              <!--<button type="button" class="am-btn am-btn-default" @click=""><span class="am-icon-plus"></span> 新增</button>-->
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
          <table class="am-table am-table-striped am-table-hover table-main" id="tree-table">
            <thead>
            <tr>
              <!--<th class="table-check"><input type="checkbox"></th>-->
              <th class="table-id">ID</th>
              <th class="table-type">名称</th>
              <th class="table-title">说明</th>
              <th class="table-date">添加时间</th>
              <th class="table-set">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="categorie in categories" v-bind:data-tt-id="categorie.id" v-bind:id="categorie.id"
                v-bind:data-tt-parent-id="categorie.parentid==null?'':categorie.parentid"
                v-bind:pId="categorie.parentid==null?'':categorie.parentid"
            >
              <!--<td><input type="checkbox"></td>-->
              <td :title='categorie.id'>{{ categorie.id | limit}}</td>
              <td :title='categorie.name'><a href="#">{{ categorie.name }}</a></td>
              <td :title='categorie.description'>{{ categorie.description }}</td>
              <td :title='categorie.createdAt'>{{ categorie.data.createdAt }}</td>
              <td>
                <div class="am-btn-toolbar">
                  <div class="am-btn-group am-btn-group-xs">
                    <button class="am-btn am-btn-default am-btn-xs am-text-secondary"><span
                      class="am-icon-pencil-square-o"></span> 编辑
                    </button>
                    <button class="am-btn am-btn-default am-btn-xs"><span class="am-icon-copy"></span> 复制</button>
                    <button class="am-btn am-btn-default am-btn-xs am-text-danger"><span class="am-icon-trash-o"></span>
                      删除
                    </button>
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
      let categories = [];
      return {
        categories
      }
    },
    filters: {
      limit: limit
    },
    methods: {
      /**
       * 查询信息分类
       */
      queryCategories: async()=> {

        let response = await API.Categorie.query();
        if (response.ok) {
          vm.categories = response.data;
        }
      },
      refresh: ()=> {
        vm.queryCategories();
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
      await vm.queryCategories();
//      $("#tree-table").treetable();
      $("#tree-table").treeTable({
//        theme: "vsStyle",
        expandLevel: 10
      });
    }
  };
</script>
