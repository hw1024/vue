<style rel="stylesheet/scss" lang="scss" scoped>
  .header-container {
    height: 50px;line-height: 50px;padding:0 20px;font-size:14px;background-color:rgba(255,255,255,.1);
    color: #fff;
    .header-l {
      float: left;
    }
    .header-r {
      float: right;
      a{
        color: #fff;
      }
    }
  }
</style>
<template>
  <div class="clearfix">
    <div class="outer-w">
      <div class="header-l">{{tele_txt}}:{{telephoto}}</div>
      <div class="header-r">
        <a href="#">中文</a>
      </div>
    </div>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex';
    export default {
      name: 'PassportHeader',
      data() {
        return {
          tele_txt: "客服电话"
        }
      },
      computed: {
        ...mapGetters([
          'telephoto',
        ])
      }
    }
</script>
