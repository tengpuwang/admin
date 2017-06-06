<template>

  <div class="">
    <app-header></app-header>
    <div class="am-cf admin-main">

      <!-- sidebar start -->
      <app-sidbar></app-sidbar>
      <!-- sidebar end -->
      <!-- content start -->
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
      <!-- content end -->
    </div>
    <app-footer></app-footer>
  </div>

</template>
<style>
</style>
<script>

  import header from '../_includes/header.vue'
  import sidbar from '../_includes/sidebar.vue'
  import footer from '../_includes/footer.vue'

  export default {
    components: {
      "app-header": header,
      "app-sidbar": sidbar,
      "app-footer": footer,
    }
  };
</script>
