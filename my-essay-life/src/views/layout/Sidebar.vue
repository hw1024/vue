<style rel="stylesheet/scss" lang="scss" scoped>
  .app-sidebar {
    float:left;
    .company-logo{
    	text-align:center;padding:20px 0;border-bottom:1px solid #eee;
  		img{
  			width: 118px;height:65px;vertical-align: middle;
  		}
    }
    .company-portrait{
      position: relative;text-align:center;
      border-bottom:1px solid #eee;
      padding:20px 0;
    }
    .company-information{
      border-bottom:1px solid #eee;
      padding:20px;
    }
  }
</style>
<template>
	<section class="app-sidebar ivu-col ivu-col-span-4">
		<div class="company-logo">
			<img src="../../assets/logo.png" alt="平台logo">
		</div>
		<div class="company-portrait">
			<PanThumb :image='image'></PanThumb>
      <Button type="primary" style="position: absolute;top: 20px;left: 15px;width: 150px;height: 150px; border-radius: 100%;background-color: transparent;border: none;z-index: 10000;" @click="imagecropperShow=true"></Button>
			<div>用户:{{name}}</div>
      <div>{{list.grade}}</div>
		</div>
    <div class="company-information">
      <h3>尊敬的用户：</h3>
      <p>这是您在人生随笔的第{{list.year}}年，您目前的会员等级为{{list.grade}}，会员持续时间为{{list.time_start}}-{{list.time_end}}</p>
      <h3>您目前的账户余额为：{{list.balance}}</h3>
      <div>
        <router-link :to="''">立刻充值</router-link>
        <router-link :to="''">查看账单</router-link>
      </div>
    </div>
    <div class="company-information">
      <h3>已使用/总存储容量</h3>
      <ul>
        <li>您一共写下了</li>
        <li>{{list.stream_essay_num}}篇流水式随笔</li>
        <li>{{list.task_essay_num}}个任务式随笔</li>
        <li>已完成{{list.complete_essay_num}}个</li>
        <li>未完成{{list.incomplete_essay_num}}个</li>
      </ul>
      <router-link :to="''">去看看其他人的任务卡</router-link>
    </div>
    <ImageCropper :width="300" :height="300" url="https://httpbin.org/post" @close='close' @crop-upload-success="cropSuccess"
      :key="imagecropperKey" v-show="imagecropperShow" />
	</section>
</template>
<script>
  import { mapGetters } from 'vuex';
  import ImageCropper from 'components/ImageCropper';
  import PanThumb from 'components/PanThumb';
  import { getList } from 'api/article';
  export default {
    name: 'Sidebar',
    data() {
      return {
        list: {
          grade: "",
          year: "",
          time_start: "",
          time_end: "",
          balance: "",
          stream_essay_num: "",
          task_essay_num: "",
          complete_essay_num: "",
          incomplete_essay_num: ""
        },
        imagecropperShow: false,
        imagecropperKey: 0,
        image: 'https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191'
      }
    },
    created() {
      this.fetchData();
    },
    components: { ImageCropper, PanThumb },
    computed: {
      ...mapGetters([
        'name',
      ])
    },
    methods: {
      fetchData() {
        getList().then(response => {
          this.loading = false;
          this.list = response.data;
          console.log(response.data)
        }).catch(err => {
          this.loading = false;
          this.$Message.error(err);
        });
      },
      cropSuccess(resData) {
        this.imagecropperShow = false;
        this.imagecropperKey = this.imagecropperKey + 1;
        this.image = resData.files.avatar;
      },
      close() {
        this.imagecropperShow = false;
      }
    }
  }
</script>