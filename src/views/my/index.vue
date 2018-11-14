<template>
  <div class="warper">
    <div class="header">      
      <div class="img-box"><image src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png" class="useImg" /></div>
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
        useImg: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top_86d58ae1.png'
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
