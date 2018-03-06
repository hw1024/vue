<style rel="stylesheet/scss" lang="scss" scoped>
  .header-container {
    height: 60px;line-height: 60px;
    font-size:14px;
    .header-l {
      float: left;
    }
    .header-r {
      float: right;
    }
  }
</style>
<template>
  <div class="clearfix outer-w">
    <div class="header-l">{{tele_txt}}:{{telephoto}}</div>
    <div class="header-r">
      <a href="#">修改密码</a>
      <a href="#" @click="logout">退出登录</a>
      <a href="#">中文</a>
    </div>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex';
    export default {
      name: 'AppHeader',
      data() {
        return {
          tele_txt: "客服电话"
        }
      },
      computed: {
        ...mapGetters([
          'telephoto',
        ])
      },
      methods: {
        logout() {
          this.$store.dispatch('LogOut').then(() => {
            location.reload();// 为了重新实例化vue-router对象 避免bug
          });
        }
      }
    }
</script>
