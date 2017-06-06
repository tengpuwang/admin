<template>
  <div id="info-list">
    <div v-for="alert in alerts" class="am-alert am-alert-success">
      <button type="button" class="am-close" @click="close(alert)">&times;</button>
      <p v-once>{{ }}</p>
    </div>
  </div>
</template>
<style>

</style>
<script>
  export default{
    data(){
      let alerts = [];
      return {
        alerts
      }
    },
    methods: {

      info:(data,ttl)=>{

      },

      close: ()=> {

      }
    }
  }
</script>
