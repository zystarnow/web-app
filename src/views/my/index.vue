<template>
  <div class="warper">
    <!--<div class="head-bg"><image src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QN/aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NDYyNjI0N2QtZTc4NS04NzQ4LTllNzctM2ZiNjRkZDIzNTFjIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVDQ0RBQTUzNzM1RTExRTc5N0UxQjJDQzNEN0NGMUFFIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVDQ0RBQTUyNzM1RTExRTc5N0UxQjJDQzNEN0NGMUFFIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE3IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZlOGJkYWY4LTYyMzItMDk0My1hYWEyLTg3ZWVhZTk0MTgzZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjI2MjQ3ZC1lNzg1LTg3NDgtOWU3Ny0zZmI2NGRkMjM1MWMiLz4gPC9yZGY6RGVzY3JpcHRpb24+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" class="head-img" /></div>-->
    <div class="header">      
      <div class="img-box"><image src="https://pt.kjfw.zbj.com/static/images/fws_mrtx.png" class="useImg" /></div>
      <div class="name">我的用户名</div>
    </div>
    <div class="info-cell">
      <wxc-cell :has-arrow="true">
        <div slot="title">
          <text>我的客户列表</text>
        </div>        
      </wxc-cell>
      <wxc-cell :has-arrow="true">
        <div slot="title">
          <text>我的拜访记录</text>
        </div>        
      </wxc-cell>
      <wxc-cell :has-arrow="true">
        <div slot="title">
          <text>帮助与反馈</text>
        </div>        
      </wxc-cell>
    </div>
    <div class="info-cell">
      <wxc-cell :has-arrow="true">
        <div slot="title">
          <text>设置</text>
        </div>        
      </wxc-cell>
      <wxc-cell :has-arrow="true">
        <div slot="title">
          <text>更多</text>
        </div>        
      </wxc-cell>
    </div>
    <bottom-bar @tabTo="onTabTo"></bottom-bar>   
  </div>
</template>
<script>
  import BottomBar from '@/components/BottomBar.vue'
  import { WxcCell, WxcIcon } from 'weex-ui'
  export default {
    name: 'my',
    components: { WxcCell, WxcIcon, BottomBar },
    data () {
      return {
        useImg: 'https://kjfw.zbj.com/assets/images/logo.png'
      }
    },
    methods: {
      onTabTo (_result) {
        let _key = _result.data.key || ''
        this.$router && this.$router.push('/' + _key)
      }
    }
  }
</script>
<style scoped>  
  .header {
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-style: solid;
    border-bottom-color: #e2e2e2;
    border-bottom-width: 1px;
  }
  
  .head-img {
    height: 150px;
  }
  .img-box {
    padding-top: 60px;
  }
  .useImg {
    width: 176px;
    height: 176px;
    text-align: center;
  }
  .name {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  .info-cell {
    margin-top: 25px;
    background-color: #ffffff;
    border-style: solid;
    border-top-color: #e2e2e2;
    border-top-width: 1px;
  }
</style>
