<style rel="stylesheet/scss" lang="scss" scoped>
  .footer-container {
    height: 40px;line-height: 40px;padding:0 20px;
    font-size:14px;text-align:center;
    border-top:1px solid #eee;
    .footer-t .copyright{
      margin-right:10px;
    }
  }
</style>
<template>
  <div>
    <div class="footer-t outer-w">
      <router-link class="" to="#">招聘</router-link>
      <router-link class="" to="#">商务合作</router-link>
      <router-link class="" to="#">联系我们</router-link>
      <span class="copyright">{{company_copyright}}</span><span>{{company_name}}</span>
    </div>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex';
    export default {
      name: 'PasspoerFooter',
      computed: {
        ...mapGetters([
          'company_name',
          'company_copyright',
        ])
      }
    }
</script>