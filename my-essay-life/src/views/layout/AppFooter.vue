<style rel="stylesheet/scss" lang="scss" scoped>
  .footer-container {
    height: 40px;line-height: 40px;padding:0 20px;
    font-size:14px;text-align:center;
    .footer-t .copyright{
      margin-right:10px;
    }
  }
</style>
<template>
  <div class="outer-w">
    <div class="footer-t"><span class="copyright">{{company_copyright}}</span><span>{{company_name}}</span></div>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex';
    export default {
      name: 'AppFooter',
      computed: {
        ...mapGetters([
          'company_name',
          'company_copyright',
        ])
      }
    }
</script>