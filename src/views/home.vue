<template>
  <div class="home" :style="{height: height+'px'}">
    <image :src="logo" class="logo" />
    <div class="btn-box">
      <wxc-button :btn-style="btnStyle" type="red" text="添加客户" @wxcButtonClicked="onLinkTo('client/add')"></wxc-button>
    </div>
    <div class="btn-box">
      <wxc-button :btn-style="btnStyle" text="添加拜访记录" @wxcButtonClicked="onLinkTo('visit/add')"></wxc-button>
    </div>
    <bottom-bar @tabTo="onTabTo"></bottom-bar>
  </div>
</template>
<script>
  import util from '@/assets/util'
  import BottomBar from '@/components/BottomBar.vue'
  import { WxcButton, WxcPopup } from 'weex-ui'
  export default {
    name: 'Home',
    components: { WxcButton, WxcPopup, BottomBar },
    data () {
      return {
        height: util.env.getPageHeight() - 0,
        logo: 'https://kjfw.zbj.com/assets/images/logo.png',
        btnStyle : {'backgroundColor': '#ff7720', 'width': '600px'}
      }
    },
    methods: {
      onTabTo (_result) {
        let _key = _result.data.key || ''
        this.$router && this.$router.push('/' + _key)
      },
      onLinkTo (link) {
        let _key = link || ''
        this.$router && this.$router.push('/' + _key)
      }
    }
  }
</script>
<style scoped>
  .home {
    background-color: #ffffff;
    position: absolute;
    left: 0;
    right:0;
    bottom: 100px;
    top:0;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 272px;
    height: 130px;
    margin-bottom: 100px;
  }
  .button {
    width: 500px;
    margin-top: 60px;
    margin-left: 225px;
    padding-top: 25px;
    padding-bottom: 25px;
    border-color: #dddddd;
    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
  }
  .btn-box {
    margin-bottom: 50px;
  }
  .text {
    font-size: 40px;
    color: #ff7720;
    text-align: center;
  }
</style>
