<!-- 添加信息 -->
<template>
  <div class="admin-content">
    <div class="am-cf am-padding">
      <div class="am-fl am-cf"><strong class="am-text-primary am-text-lg">信息管理</strong> /
        <small>添加信息</small>
      </div>
    </div>

    <div class="am-g">
      <div class="am-u-lg-10">
        <form class="am-form am-form-horizontal">
          <div class="am-form-group" style="display:none">
            <label for="site-city" class="am-u-sm-2 am-form-label">站点城市</label>
            <div class="am-u-sm-10">
              <select data-placeholder="请选择站点城市" id="site-city" v-model="info.site">
                <option value=""></option>
                <option v-for="site in sites" :value="site.id">{{ site.name }}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="site-name" class="am-u-sm-2 am-form-label">信息标题</label>
            <div class="am-u-sm-10">
              <input type="text" id="site-name" placeholder="标题 / Title" v-model="info.title">
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-type" class="am-u-sm-2 am-form-label">行业分类</label>
            <div class="am-u-sm-10">
              <select data-placeholder="请选择行业分类" id="info-category" v-model="info.category">
                <option value=""></option>
                <option v-for="item in industries" :value="item.name">{{ item.name }}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-type" class="am-u-sm-2 am-form-label">信息类型</label>
            <div class="am-u-sm-10">
              <select data-placeholder="请选择信息类型" id="info-type" disabled v-model="info.infoType">
                <option value=""></option>
                <option v-for="item in infoTypes" :value="item.code">{{ item.name }} - {{ item.code }}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-type" class="am-u-sm-2 am-form-label">物业类型</label>
            <div class="am-u-sm-10">
              <select data-placeholder="请选择物业类型" id="estate-type" disabled v-model="info.estateType">
                <option value=""></option>
                <option v-for="item in estateTypes" :value="item.code">{{ item.name }} - {{ item.code }}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-type" class="am-u-sm-2 am-form-label">商铺类型</label>
            <div class="am-u-sm-10">
              <select data-placeholder="请选择商铺类型" id="store-type" v-model="info.estate.type">
                <option value=""></option>
                <option v-for="item in storeTypes" :value="item">{{ item}}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-area" class="am-u-sm-2 am-form-label"> 商铺面积</label>
            <div class="am-u-sm-10">
              <div class="am-input-group">
                <input type="number" class="am-form-field" id="estate-area" placeholder="商铺面积 / Area"
                       v-model="info.estate.area">
                <span class="am-input-group-label" id="sizing-addon2">m<sup>2</sup></span>
              </div>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-transferFee" class="am-u-sm-2 am-form-label"> 转让费</label>
            <div class="am-u-sm-6">
              <div class="am-input-group">
                <input type="number" class="am-form-field" id="estate-transferFee" placeholder=""
                       v-model="info.estate.transferFee">
                <span class="am-input-group-label">元</span>
              </div>
            </div>

            <div class="am-u-sm-4">
              <div class="am-input-group">
                <span class="am-input-group-label">+/-</span>
                <input type="number" class="am-form-field" id="estate-offset" placeholder=""
                       v-model="info.estate.offset">
                <span class="am-input-group-label">元</span>
              </div>
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-estate-canBargaining" class="am-u-sm-2 am-form-label">
              可否面议
            </label>
            <div class="am-u-sm-10">
              <select data-placeholder="可否面议" id="info-estate-canBargaining" v-model="info.estate.canBargaining">
                <option value="true">是</option>
                <option value="false">否</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-estate-canEmptyAttorn" class="am-u-sm-2 am-form-label">
              可否空转
            </label>
            <div class="am-u-sm-10">
              <select data-placeholder="可否空转" id="info-estate-canEmptyAttorn" v-model="info.estate.canEmptyAttorn">
                <option value="true">是</option>
                <option value="false">否</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-estate-isOperating" class="am-u-sm-2 am-form-label">
              营业中
            </label>
            <div class="am-u-sm-10">
              <select data-placeholder="是否营业中" id="info-estate-isOperating" v-model="info.estate.isOperating">
                <option value="true">是</option>
                <option value="false">否</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-estate-isPreference" class="am-u-sm-2 am-form-label">
              腾铺优选
            </label>
            <div class="am-u-sm-10">
              <select data-placeholder="腾铺优选" id="info-estate-isPreference" v-model="info.estate.isPreference">
                <option value="true">是</option>
                <option value="false">否</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-rental" class="am-u-sm-2 am-form-label"> 租金</label>
            <div class="am-u-sm-10">
              <div class="am-input-group">
                <input type="number" class="am-form-field" id="estate-rental" placeholder="商铺面积 / Rental"
                       v-model="info.estate.rental">
                <span class="am-input-group-label">元/月</span>
              </div>

            </div>
          </div>


          <div class="am-form-group">
            <label for="estate-propertyFee" class="am-u-sm-2 am-form-label"> 物业费</label>
            <div class="am-u-sm-10">
              <div class="am-input-group">
                <input type="number" id="estate-propertyFee" class="am-form-field" placeholder="商铺面积 / Rental"
                       v-model="info.estate.propertyFee">
                <span class="am-input-group-label">元/月</span>
              </div>
            </div>
          </div>


          <div class="am-form-group">
            <label for="estate-propertyFee" class="am-u-sm-2 am-form-label"> 区域商圈</label>
            <div class="am-u-sm-5 am-input-group">
              <select data-placeholder="请选择区域" id="estate-district" v-model="info.estate.district">
                <option value=""></option>
                <option v-for="area in selected_city.areas" :value="area.name">{{ area.name }}</option>
              </select>
            </div>
            <div class="am-u-sm-5 am-input-group">
              <select data-placeholder="请选择商圈" id="estate-shopArea" v-model="info.estate.shopArea">
                <option value=""></option>
                <option v-for="shopArea in selected_district.shopAreas" :value="shopArea.name">{{ shopArea.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-propertyFee" class="am-u-sm-2 am-form-label"> 地铁站点</label>
            <div class="am-u-sm-5 am-input-group">
              <select data-placeholder="请选择地铁线路" id="estate-subway" v-model="info.estate.subway">
                <option value=""></option>
                <option v-for="subway in selected_city.subways" :value="subway.name">{{ subway.name }}</option>
              </select>
            </div>
            <div class="am-u-sm-5 am-input-group">
              <select data-placeholder="请选择地铁站点" id="estate-station" v-model="info.estate.station">
                <option value=""></option>
                <option v-for="station in selected_subway.stations" :value="station">{{ station }}</option>
              </select>
            </div>
          </div>

          <div class="am-form-group">
            <label for="estate-propertyFee" class="am-u-sm-2 am-form-label"> 详细地址</label>
            <div class="am-u-sm-10">
              <div class="am-input-group" style="display:none" id="estate-address">
                	<span class="am-input-group-label">
                    <i class="am-icon am-icon-home"></i>
                    <span class="am-padding-horizontal-xs">选择</span>
				          </span>
                <input type="text" class="am-input-group-label" name="prov" v-model="info.estate.province" readonly>
                <input type="text" class="am-input-group-label" name="city" v-model="info.estate.city" readonly>
                <input type="text" class="am-input-group-label" name="district" v-model="info.estate.district" readonly>
              </div>
              <input type="text" class="am-form-field" placeholder="详细地址 / Address" v-model="info.estate.location">
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-content" class="am-u-sm-2 am-form-label">内容</label>
            <div class="am-u-sm-10">
              <!-- 加载编辑器的容器 -->
              <script id="info-content" name="info-content" type="text/plain" style="width:100%;min-height: 360px; ">
              </script>
              <!--<textarea type="text" id="site-title" placeholder="内容 / Content" v-model="info.content"></textarea>-->
            </div>
          </div>

          <div class="am-form-group">
            <label for="uploader" class="am-u-sm-2 am-form-label">图片</label>
            <div class="am-u-sm-10">
              <div id="uploader" style="width:100%">
                <!-- 图片列表 -->
                <div class="queueList">
                  <div id="dndArea" class="placeholder" style="width:100%">
                    <div id="filePicker">添加文件</div>
                    <p>或将照片拖放（粘贴）到这里，最多可选8张</p>
                  </div>
                </div>
                <!-- 状态条 -->
                <div class="statusBar" style="display:none;">
                  <div class="progress">
                    <span class="text">0%</span>
                    <span class="percentage"></span>
                  </div>
                  <div class="info"></div>
                  <!-- 操作按钮 -->
                  <div class="btns">
                    <div id="filePicker2">继续添加</div>
                    <div class="uploadBtn">开始上传</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr>

          <div class="am-form-group">
            <label for="info-contact-name" class="am-u-sm-2 am-form-label">联系人</label>
            <div class="am-u-sm-10">
              <input type="text" id="info-contact-name" placeholder="联系人" v-model="info.contact.name">
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-contact-phone" class="am-u-sm-2 am-form-label">联系电话</label>
            <div class="am-u-sm-10">
              <input type="text" id="info-contact-phone" placeholder="联系电话" v-model="info.contact.phone">
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-contact-qq" class="am-u-sm-2 am-form-label">QQ</label>
            <div class="am-u-sm-10">
              <input type="text" id="info-contact-qq" placeholder="QQ" v-model="info.contact.qq">
            </div>
          </div>

          <div class="am-form-group">
            <label for="info-contact-weixin" class="am-u-sm-2 am-form-label">微信</label>
            <div class="am-u-sm-10">
              <input type="text" id="info-contact-weixin" placeholder="微信" v-model="info.contact.weixin">
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
<style scope>
  #container {
    color: #838383;
    font-size: 12px;
  }

  #uploader .queueList {
    margin: 20px;
    border: 3px dashed #e6e6e6;
  }

  #uploader .queueList.filled {
    padding: 17px;
    margin: 0;
    border: 3px dashed transparent;
  }

  #uploader .queueList.webuploader-dnd-over {
    border: 3px dashed #999999;
  }

  #uploader p {
    margin: 0;
  }

  .element-invisible {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }

  #uploader .placeholder {
    min-height: 350px;
    padding-top: 178px;
    text-align: center;
    background: url(/static/plugins/webuploader/images/image.png) center 93px no-repeat;
    color: #cccccc;
    font-size: 18px;
    position: relative;
  }

  #uploader .placeholder .webuploader-pick {
    font-size: 18px;
    background: #00b7ee;
    border-radius: 3px;
    line-height: 44px;
    padding: 0 30px;
    *width: 120px;
    color: #fff;
    display: inline-block;
    margin: 0 auto 20px auto;
    cursor: pointer;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  #uploader .placeholder .webuploader-pick-hover {
    background: #00a2d4;
  }

  #uploader .placeholder .flashTip {
    color: #666666;
    font-size: 12px;
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 20px;
  }

  #uploader .placeholder .flashTip a {
    color: #0785d1;
    text-decoration: none;
  }

  #uploader .placeholder .flashTip a:hover {
    text-decoration: underline;
  }

  #uploader .filelist {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  #uploader .filelist:after {
    content: '';
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;
    clear: both;
  }

  #uploader .filelist li {
    width: 110px;
    height: 110px;
    background: url(/static/plugins/webuploader/images/bg.png) no-repeat;
    text-align: center;
    margin: 0 8px 20px 0;
    position: relative;
    display: inline;
    float: left;
    overflow: hidden;
    font-size: 12px;
  }

  #uploader .filelist li p.log {
    position: relative;
    top: -45px;
  }

  #uploader .filelist li p.title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    top: 5px;
    text-indent: 5px;
    text-align: left;
  }

  #uploader .filelist li p.progress {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    height: 8px;
    overflow: hidden;
    z-index: 50;
    margin: 0;
    border-radius: 0;
    background: none;
    -webkit-box-shadow: 0 0 0;
  }

  #uploader .filelist li p.progress span {
    display: none;
    overflow: hidden;
    width: 0;
    height: 100%;
    background: #1483d8 url(/static/plugins/webuploader/images/progress.png) repeat-x;

    -webit-transition: width 200ms linear;
    -moz-transition: width 200ms linear;
    -o-transition: width 200ms linear;
    -ms-transition: width 200ms linear;
    transition: width 200ms linear;

    -webkit-animation: progressmove 2s linear infinite;
    -moz-animation: progressmove 2s linear infinite;
    -o-animation: progressmove 2s linear infinite;
    -ms-animation: progressmove 2s linear infinite;
    animation: progressmove 2s linear infinite;

    -webkit-transform: translateZ(0);
  }

  @-webkit-keyframes progressmove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 17px 0;
    }
  }

  @-moz-keyframes progressmove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 17px 0;
    }
  }

  @keyframes progressmove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 17px 0;
    }
  }

  #uploader .filelist li p.imgWrap {
    position: relative;
    z-index: 2;
    line-height: 110px;
    vertical-align: middle;
    overflow: hidden;
    width: 110px;
    height: 110px;

    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    transform-origin: 50% 50%;

    -webit-transition: 200ms ease-out;
    -moz-transition: 200ms ease-out;
    -o-transition: 200ms ease-out;
    -ms-transition: 200ms ease-out;
    transition: 200ms ease-out;
  }

  #uploader .filelist li img {
    width: 100%;
  }

  #uploader .filelist li p.error {
    background: #f43838;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 28px;
    line-height: 28px;
    width: 100%;
    z-index: 100;
  }

  #uploader .filelist li .success {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 40px;
    width: 100%;
    z-index: 200;
    background: url(/static/plugins/webuploader/images/success.png) no-repeat right bottom;
  }

  #uploader .filelist div.file-panel {
    position: absolute;
    height: 0;
    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#80000000', endColorstr='#80000000') \0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    z-index: 300;
  }

  #uploader .filelist div.file-panel span {
    width: 24px;
    height: 24px;
    display: inline;
    float: right;
    text-indent: -9999px;
    overflow: hidden;
    background: url(/static/plugins/webuploader/images/icons.png) no-repeat;
    margin: 5px 1px 1px;
    cursor: pointer;
  }

  #uploader .filelist div.file-panel span.rotateLeft {
    background-position: 0 -24px;
  }

  #uploader .filelist div.file-panel span.rotateLeft:hover {
    background-position: 0 0;
  }

  #uploader .filelist div.file-panel span.rotateRight {
    background-position: -24px -24px;
  }

  #uploader .filelist div.file-panel span.rotateRight:hover {
    background-position: -24px 0;
  }

  #uploader .filelist div.file-panel span.cancel {
    background-position: -48px -24px;
  }

  #uploader .filelist div.file-panel span.cancel:hover {
    background-position: -48px 0;
  }

  #uploader .statusBar {
    height: 63px;
    border-top: 1px solid #dadada;
    padding: 0 20px;
    line-height: 63px;
    vertical-align: middle;
    position: relative;
  }

  #uploader .statusBar .progress {
    border: 1px solid #1483d8;
    width: 198px;
    background: #fff;
    height: 18px;
    position: relative;
    display: inline-block;
    text-align: center;
    line-height: 20px;
    color: #6dbfff;
    position: relative;
    margin: 0 10px 0 0;
  }

  #uploader .statusBar .progress span.percentage {
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    background: #1483d8;
    position: absolute;
  }

  #uploader .statusBar .progress span.text {
    position: relative;
    z-index: 10;
  }

  #uploader .statusBar .info {
    display: inline-block;
    font-size: 14px;
    color: #666666;
  }

  #uploader .statusBar .btns {
    position: absolute;
    top: 10px;
    right: 20px;
    line-height: 40px;
  }

  #filePicker2 {
    display: inline-block;
    float: left;
  }

  #uploader .statusBar .btns .webuploader-pick,
  #uploader .statusBar .btns .uploadBtn,
  #uploader .statusBar .btns .uploadBtn.state-uploading,
  #uploader .statusBar .btns .uploadBtn.state-paused {
    background: #ffffff;
    border: 1px solid #cfcfcf;
    color: #565656;
    padding: 0 18px;
    display: inline-block;
    border-radius: 3px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 14px;
    float: left;
  }

  #uploader .statusBar .btns .webuploader-pick-hover,
  #uploader .statusBar .btns .uploadBtn:hover,
  #uploader .statusBar .btns .uploadBtn.state-uploading:hover,
  #uploader .statusBar .btns .uploadBtn.state-paused:hover {
    background: #f0f0f0;
  }

  #uploader .statusBar .btns .uploadBtn {
    background: #00b7ee;
    color: #fff;
    border-color: transparent;
  }

  #uploader .statusBar .btns .uploadBtn:hover {
    background: #00a2d4;
  }

  #uploader .statusBar .btns .uploadBtn.disabled {
    pointer-events: none;
    opacity: 0.6;
  }


</style>
<script>
  import Vue from "vue";
  import API from "../../apis/index";
  // 广告位置
  import Adsenses from "../../assets/datas/dict/adsenses.json"
  import InfoTypes from "../../assets/datas/dict/info-types.json"
  import Industries from "../../assets/datas/dict/industries.json"
  import EstateTypes from "../../assets/datas/dict/estate-types.json"
  import StoreTypes from "../../assets/datas/dict/store-types.json"
  import {API_ROOT} from '../../config'

  let vm = {};
  let store = $.AMUI.store;

  export default {
    data(){
      // 当前站点Id
      let current_site_id = store.get("current_site_id");
      let info = {
        "site": current_site_id, // 所属站点
        "title": "",
        "content": "",
        "category": "",
        "tags": [],
        "images": [],
        "infoType": "Attorn",
        "estateType": "Store",
        "estate": {
          "type": "",
          "area": 50,
          "rental": 2000,
          "propertyFee": 50,
          "transferFee": 10000,
          "offset": 200,
          "canBargaining": "false",
          "canEmptyAttorn": "false",
          "isOperating": "false",
          "isPreference": "false",   // 腾铺优选
          "province": "",
          "city": "",
          "district": "",
          "street": "",
          "location": "",
          "shopArea": "",
          "subway": "",
          "station": "",
        },
        "infoSource": "TENGPU", // 信息来源 腾铺认证
        "contact": {
          "name": "",
          "phone": "",
          "qq": "",
          "weixin": ""
        },
        "level": 0
      };

      // 所有站点
      let sites = [];

      // 信息类型
      let infoTypes = InfoTypes;
      // 广告位置
      let adsenses = Adsenses;
      // 行业分类
      let industries = Industries;
      // 物业类型
      let estateTypes = EstateTypes;
      //  店铺类型
      let storeTypes = StoreTypes;
      // 当前选择的城市
      let selected_city = {};
      // 当前选择的城市区域
      let selected_district = {};
      // 当前选择的城市区域商圈
      let selected_shopArea = {};
      // 当前选择的地铁线路
      let selected_subway = {};
      // 当前选择的地铁线路站点
      let selected_station = {};
      return {
        adsenses,
        infoTypes,
        industries,
        estateTypes,
        storeTypes,
        info,
        sites,
        selected_city,
        selected_district,
        selected_shopArea,
        selected_subway,
        selected_station,
        current_site_id
      }
    },
    methods: {
      submit: async() => {
        // 获取文本编辑器内容
        vm.info.content = um.getContent();
        console.log("TENGPU:info.add");
        console.log(vm.info);
        let response = await API.Info.save(vm.info);
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
       * 查询站点列表
       */
      querySites: async() => {
        let response = await API.Site.query();
        if (response.ok) {
          vm.sites = response.data;
          let selected_site = vm.sites.filter(function (item) {
            return item.id === vm.current_site_id;
          });
          // 当前选择的城市
          vm.selected_city = selected_site[0].city;
          Vue.nextTick(function () {
            $("select").trigger('chosen:updated');
          });
        }
      }
    },
    beforeCreate(){
      vm = this;
    },
    async caeated(){

    },
    async mounted(){

      // 查询站点列表;
      await vm.querySites();
      // 初始化下拉选择插件
      $("select").chosen();
      $('input[type="checkbox"], input[type="radio"]').uCheck();
      // 选择城市时触发事件
      $('#site-city').on('change', function (e, params) {
        let id = params.selected;
        vm.info.site = id;
        let selected_site = vm.sites.filter(function (item) {
          return item.id === id;
        });
        // 当前选择的城市
        vm.selected_city = selected_site[0].city;

        Vue.nextTick(function () {
          // DOM 更新了
          // 更新区域选择下拉
          $('#estate-district').trigger('chosen:updated');
          $('#estate-subway').trigger('chosen:updated');
        })
      });

      // 选择区域时触发事件
      $('#estate-district').on('change', function (e, params) {

        let district = params.selected;
        vm.info.estate.district = district;
        let selected_district = vm.selected_city.areas.filter(function (item) {
          return item.name === district;
        });

        // 当前选择的区域
        vm.selected_district = selected_district[0];
        Vue.nextTick(function () {
          // DOM 更新了
          // 更新区域选择下拉
          $('#estate-shopArea').trigger('chosen:updated');
        })
      });

      // 选择商圈时触发事件
      $('#estate-shopArea').on('change', function (e, params) {
        let shopArea = params.selected;
        vm.info.estate.shopArea = shopArea;
      });

      // 选择店铺类型时触发事件
      $('#store-type').on('change', function (e, params) {
        let type = params.selected;
        vm.info.estate.type = type;
      });

      // 选择地铁时触发事件
      $('#estate-subway').on('change', function (e, params) {

        let subway = params.selected;
        vm.info.estate.subway = subway;
        let selected_subway = vm.selected_city.subways.filter(function (item) {
          return item.name === subway;
        });
        // 当前选择的地铁
        vm.selected_subway = selected_subway[0];

        Vue.nextTick(function () {
          // DOM 更新了
          // 更新区域选择下拉
          $('#estate-station').trigger('chosen:updated');
        })
      });

      // 选择站点时触发事件
      $('#estate-station').on('change', function (e, params) {
        let station = params.selected;
        vm.info.estate.station = station;
      });

      // 选择行业分类
      $('#info-category').on('change', function (e, params) {
        let category = params.selected;
        vm.info.category = category;
      });

      // 选择可否面议时触发事件
      $('#info-estate-canBargaining')
        .on('change', function (e, params) {
          let value = params.selected;
          vm.info.estate.canBargaining = value;
        });

      // 选择可否空转时触发事件
      $('#info-estate-canEmptyAttorn')
        .on('change', function (e, params) {
          let value = params.selected;
          vm.info.estate.canEmptyAttorn = value;
        });

      // 选择营业中时触发事件
      $('#info-estate-isOperating')
        .on('change', function (e, params) {
          let value = params.selected;
          vm.info.estate.isOperating = value;
        });

      // 选择腾铺优选时触发事件
      $('#info-estate-isPreference')
        .on('change', function (e, params) {
          let value = params.selected;
          vm.info.estate.isPreference = value;
        });

//      $("#estate-address").address({
//        customOutput: true,
//        selectEnd: function (json, address) {
//          for (var key in json) {
//            $("#estate-address").find("input[name='" + key + "']").val(json[key]);
//          }
//        }
//      }).on("provTap", function (event, activeli) {
//        console.log(activeli.text());
//      }).on("cityTap", function (event, activeli) {
//        console.log(activeli.text());
//      });

      $(function () {
        window.um = UM.getEditor('info-content', {
          /* 传入配置参数,可配参数列表看umeditor.config.js */
          lang: /^zh/.test(navigator.language || navigator.browserLanguage || navigator.userLanguage) ? 'zh-cn' : 'en',
          langPath: UMEDITOR_CONFIG.UMEDITOR_HOME_URL + "lang/",
          focus: true,
          toolbar: [
            'source | undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
            'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize',
            '| justifyleft justifycenter justifyright justifyjustify |',
            'link unlink | emotion | map', '| horizontal print preview  fullscreen', 'drafts'
          ]
        });
      });

      // 文件上传
      jQuery(
        function () {
          let $ = jQuery, // just in case. Make sure it's not an other libaray.

            $wrap = $('#uploader'),

            // 图片容器
            $queue = $('<ul class="filelist"></ul>').appendTo($wrap.find('.queueList')),

            // 状态栏，包括进度和控制按钮
            $statusBar = $wrap.find('.statusBar'),

            // 文件总体选择信息。
            $info = $statusBar.find('.info'),

            // 上传按钮
            $upload = $wrap.find('.uploadBtn'),

            // 没选择文件之前的内容。
            $placeHolder = $wrap.find('.placeholder'),

            // 总体进度条
            $progress = $statusBar.find('.progress').hide(),

            // 添加的文件数量
            fileCount = 0,

            // 添加的文件总大小
            fileSize = 0,

            // 优化retina, 在retina下这个值是2
            ratio = window.devicePixelRatio || 1,

            // 缩略图大小
            thumbnailWidth = 110 * ratio,
            thumbnailHeight = 110 * ratio,

            // 可能有pedding, ready, uploading, confirm, done.
            state = 'pedding',

            // 所有文件的进度信息，key为file id
            percentages = {},

            supportTransition = (function () {
              var s = document.createElement('p').style,
                r = 'transition' in s ||
                  'WebkitTransition' in s ||
                  'MozTransition' in s ||
                  'msTransition' in s ||
                  'OTransition' in s;
              s = null;
              return r;
            })(),

            // WebUploader实例
            uploader;

          if (!WebUploader.Uploader.support()) {
            alert('Web Uploader 不支持您的浏览器！如果你使用的是IE浏览器，请尝试升级 flash 播放器');
            throw new Error('WebUploader does not support the browser you are using.');
          }

          // 实例化
          uploader = WebUploader.create({
            pick: {
              id: '#filePicker',
              label: '点击选择图片'
            },
            dnd: '#uploader .queueList',
            paste: document.body,

            // 只允许选择图片文件。
            accept: {
              title: 'Images',
              extensions: 'jpg,jpeg,bmp,png',
              mimeTypes: 'image/*'
            },

            // swf文件路径
            swf: '/static/plugins/webuploader/Uploader.swf',

            disableGlobalDnd: true,
            // 二进制上传
            sendAsBinary: true,
            // 分片上传
            chunked: true,
            // 上传服务器地址
            server: API_ROOT + '/upload',
            // 去重
            duplicate: true,
            // 在文件传输时提前把下一个文件准备好
            prepareNextFile: true,
            fileNumLimit: 8,
            fileSizeLimit: 80 * 1024 * 1024, // 80 M
            fileSingleSizeLimit: 10 * 1024 * 1024 // 10 M
          });

          // 添加“添加文件”的按钮，
          uploader.addButton({
            id: '#filePicker2',
            label: '继续添加'
          });


          // 修改后图片上传前，尝试将图片压缩
          uploader.option('compress', {
            width: 800,
            height: 800,

            // 图片质量，只有type为`image/jpeg`的时候才有效。
            quality: 90,

            // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
            allowMagnify: false,

            // 是否允许裁剪。
            crop: false,

            // 是否保留头部meta信息。
            preserveHeaders: true,

            // 如果发现压缩后文件大小比原来还大，则使用原来图片
            // 此属性可能会影响图片自动纠正功能
            noCompressIfLarger: false,

            // 单位字节，如果图片大小小于此值，不会采用压缩。
            compressSize: 50 * 1024 // 50Kb
          });

          // 当有文件添加进来时执行，负责view的创建
          function addFile(file) {

            var $li = $('<li id="' + file.id + '">' +
                '<p class="title">' + file.name + '</p>' +
                '<p class="imgWrap"></p>' +
                '<p class="progress"><span></span></p>' +
                '</li>'),

              $btns = $('<div class="file-panel">' +
                '<span class="cancel">删除</span>' +
                '<span class="rotateRight">向右旋转</span>' +
                '<span class="rotateLeft">向左旋转</span></div>').appendTo($li),
              $prgress = $li.find('p.progress span'),
              $wrap = $li.find('p.imgWrap'),
              $info = $('<p class="error"></p>'),

              showError = function (code) {
                switch (code) {
                  case 'exceed_size':
                    text = '文件大小超出';
                    break;

                  case 'interrupt':
                    text = '上传暂停';
                    break;

                  default:
                    text = '上传失败，请重试';
                    break;
                }

                $info.text(text).appendTo($li);
              };

            if (file.getStatus() === 'invalid') {
              showError(file.statusText);
            } else {
              // @todo lazyload
              $wrap.text('预览中');
              // 生成缩略图
              uploader.makeThumb(file, function (error, src) {
                if (error) {
                  $wrap.text('不能预览');
                  return;
                }

                var img = $('<img src="' + src + '">');
                $wrap.empty().append(img);
              }, thumbnailWidth, thumbnailHeight);

              percentages[file.id] = [file.size, 0];
              file.rotation = 0;
            }

            file.on('statuschange', function (cur, prev) {
              if (prev === 'progress') {
                $prgress.hide().width(0);
              } else if (prev === 'queued') {
                $li.off('mouseenter mouseleave');
                $btns.remove();
              }

              // 成功
              if (cur === 'error' || cur === 'invalid') {
                console.log(file.statusText);
                showError(file.statusText);
                percentages[file.id][1] = 1;
              } else if (cur === 'interrupt') {
                showError('interrupt');
              } else if (cur === 'queued') {
                percentages[file.id][1] = 0;
              } else if (cur === 'progress') {
                $info.remove();
                $prgress.css('display', 'block');
              } else if (cur === 'complete') {
                $li.append('<span class="success"></span>');
              }

              $li.removeClass('state-' + prev).addClass('state-' + cur);
            });

            $li.on('mouseenter', function () {
              $btns.stop().animate({
                height: 30
              });
            });

            $li.on('mouseleave', function () {
              $btns.stop().animate({
                height: 0
              });
            });


            $btns.on('click', 'span', function () {
              var index = $(this).index(),
                deg;

              switch (index) {
                case 0:
                  uploader.removeFile(file);
                  return;

                case 1:
                  file.rotation += 90;
                  break;

                case 2:
                  file.rotation -= 90;
                  break;
              }

              if (supportTransition) {
                deg = 'rotate(' + file.rotation + 'deg)';
                $wrap.css({
                  '-webkit-transform': deg,
                  '-mos-transform': deg,
                  '-o-transform': deg,
                  'transform': deg
                });
              } else {
                $wrap.css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + (~~((file.rotation / 90) % 4 + 4) % 4) + ')');
                // use jquery animate to rotation
                // $({
                //     rotation: rotation
                // }).animate({
                //     rotation: file.rotation
                // }, {
                //     easing: 'linear',
                //     step: function( now ) {
                //         now = now * Math.PI / 180;

                //         var cos = Math.cos( now ),
                //             sin = Math.sin( now );

                //         $wrap.css( 'filter', "progid:DXImageTransform.Microsoft.Matrix(M11=" + cos + ",M12=" + (-sin) + ",M21=" + sin + ",M22=" + cos + ",SizingMethod='auto expand')");
                //     }
                // });
              }


            });

            $li.appendTo($queue);

            // 有新文件添加后启用上传按钮
            $upload.removeClass("disabled")
          }

          // 负责view的销毁
          function removeFile(file) {
            var $li = $('#' + file.id);

            delete percentages[file.id];
            updateTotalProgress();
            $li.off().find('.file-panel').off().end().remove();
          }

          // 更新总进度
          function updateTotalProgress() {
            var loaded = 0,
              total = 0,
              spans = $progress.children(),
              percent;

            $.each(percentages, function (k, v) {
              total += v[0];
              loaded += v[0] * v[1];
            });

            percent = total ? loaded / total : 0;

            spans.eq(0).text(Math.round(percent * 100) + '%');
            spans.eq(1).css('width', Math.round(percent * 100) + '%');
            updateStatus();
          }

          // 更新状态
          function updateStatus() {

            var text = '',
              stats;

            if (state === 'ready') {
              text = '选中' + fileCount + '张图片，共' +
                WebUploader.formatSize(fileSize) + '。';
            } else if (state === 'confirm') {
              stats = uploader.getStats();
              if (stats.uploadFailNum) {
                text = '已成功上传' + stats.successNum + '张照片至XX相册，' +
                  stats.uploadFailNum + '张照片上传失败，<a class="retry" href="#">重新上传</a>失败图片或<a class="ignore" href="#">忽略</a>'
              }

            } else {
              stats = uploader.getStats();
              text = '共' + fileCount + '张（' +
                WebUploader.formatSize(fileSize) +
                '），已上传' + stats.successNum + '张';

              if (stats.uploadFailNum) {
                text += '，失败' + stats.uploadFailNum + '张';
              }
            }

            $info.html(text);
          }

          function setState(val) {
            var file, stats;

            if (val === state) {
              return;
            }

            $upload.removeClass('state-' + state);
            $upload.addClass('state-' + val);
            state = val;

            switch (state) {
              case 'pedding':
                $placeHolder.removeClass('element-invisible');
                $queue.parent().removeClass('filled');
                $queue.hide();
                $statusBar.addClass('element-invisible');
                uploader.refresh();
                break;

              case 'ready':
                $placeHolder.addClass('element-invisible');
                $('#filePicker2').removeClass('element-invisible');
                $queue.parent().addClass('filled');
                $queue.show();
                $statusBar.removeClass('element-invisible');
                uploader.refresh();
                break;

              case 'uploading':
                $('#filePicker2').addClass('element-invisible');
                $progress.show();
                $upload.text('暂停上传');
                break;

              case 'paused':
                $progress.show();
                $upload.text('继续上传');
                break;

              case 'confirm':
                $progress.hide();
                $upload.text('开始上传').addClass('disabled');

                stats = uploader.getStats();
                if (stats.successNum && !stats.uploadFailNum) {
                  setState('finish');
                  return;
                }
                break;
              case 'finish':
                $('#filePicker2').removeClass('element-invisible');
                stats = uploader.getStats();
                if (stats.successNum) {
                  layer.msg('上传成功');
                } else {
                  // 没有成功的图片，重设
                  state = 'done';
                  location.reload();
                }
                break;
            }

            updateStatus();
          }

          uploader.onFileQueued = function (file) {
            fileCount++;
            fileSize += file.size;

            if (fileCount === 1) {
              $placeHolder.addClass('element-invisible');
              $statusBar.show();
            }

            addFile(file);
            setState('ready');
            updateTotalProgress();
          };

          uploader.onFileDequeued = function (file) {
            fileCount--;
            fileSize -= file.size;

            if (!fileCount) {
              setState('pedding');
            }

            removeFile(file);
            updateTotalProgress();

          };

          // 上传进度
          uploader.onUploadProgress = function (file, percentage) {
            var $li = $('#' + file.id),
              $percent = $li.find('.progress span');

            $percent.css('width', percentage * 100 + '%');
            percentages[file.id][1] = percentage;
            updateTotalProgress();
          };

          // 上传成功
          uploader.onUploadSuccess = function (file, response) {
            let image = response[0];
            vm.info.images.push(image.path);
            console.log(vm.info.images);
          };
          uploader.onUploadError = function (code) {
            layer.msg("上传出错：" + code)
          };
          uploader.onUploadComplete = function (file) {
          };
          uploader.onError = function (file, code) {
            if (file === 'Q_EXCEED_NUM_LIMIT') {
              layer.msg("最多选择" + code + ' 张图片！')
            }

          };
          uploader.onUploadAccept = function (file, code) {
          };
          uploader.on('all', function (type) {
            var stats;
            switch (type) {
              // 上传完成
              case 'uploadFinished':
                setState('confirm');
                break;

              case 'startUpload':
                setState('uploading');
                break;

              case 'stopUpload':
                setState('paused');
                break;
            }
          });

          $upload.on('click', function () {
            if ($(this).hasClass('disabled')) {
              return false;
            }

            if (state === 'ready') {
              uploader.upload();
            } else if (state === 'paused') {
              uploader.upload();
            } else if (state === 'uploading') {
              uploader.stop();
            }

          });

          $info.on('click', '.retry', function () {
            uploader.retry();
          });

          $info.on('click', '.ignore', function () {
            alert('todo');
          });

          $upload.addClass('state-' + state);
          updateTotalProgress();
        });
    }
  };
</script>
