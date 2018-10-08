<template>
  <div class="warper">	
    <wxc-minibar title="客户详情" :left-button="leftButton" background-color="#009ff0" text-color="#ffffff" @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"></wxc-minibar>
    <div class="detail">
      <wxc-cell label="公司名称" title="新疆华特信息网络股份有限公司"></wxc-cell>
      <wxc-cell label="联系人" title="张某某总经理"></wxc-cell>
      <wxc-cell label="联系人电话" title="13842****125"></wxc-cell>
      <wxc-cell label="企业类型" title="小型企业"></wxc-cell>
      <wxc-cell label="地区" title="新疆-乌鲁木齐"></wxc-cell>
      <wxc-cell label="有效商机" title="12312"></wxc-cell>
      <wxc-cell label="放弃商机" title="4564"></wxc-cell>
      <wxc-cell label="商机创建人" title="陈某某"></wxc-cell>
      <wxc-cell label="商机创建时间" title="2017-08-26"></wxc-cell>
    </div>
  </div>
</template>
<script>
import { WxcMinibar } from 'weex-ui'
import { WxcCell } from 'weex-ui';
const modal = weex.requireModule('modal')
export default {
  components: { WxcMinibar, WxcCell },
  data () {
    return {
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png'
    }
  },
  methods: {
    minibarLeftButtonClick() {
      this.$router.go(-1)
    } 
  }
}
</script>
<style scoped>
  .detail{
    width: 750px;   	
    margin-top: 15px;
  }
  .text {
    background-color: #ffffff;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 15px;
  }
</style>