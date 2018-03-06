<style rel="stylesheet/scss" lang="scss" scoped>
  .app-main {
    float:left; min-height: 100%;
    transition: all .28s ease-out;
  }
</style>
<template>
    <section class="app-main ivu-col ivu-col-span-20">
        <transition name="fade" mode="out-in">
            <router-view :key="key"></router-view>
        </transition>
    </section>
</template>
<script>
    export default {
      name: 'AppMain',
      computed: {
        key() {
          return this.$route.name !== undefined
                        ? this.$route.name + +new Date()
                        : this.$route + +new Date()
        }
      }
    }
</script>
