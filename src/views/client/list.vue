<template>
  <div class="main">
    <div class="header">
      <wxc-searchbar :always-show-cancel="showCancel" cancel-label="添加" theme="gray" @wxcSearchbarCancelClicked="searchbarCancelClick"></wxc-searchbar>
    </div>
    <scroller class="scroller" :style="{height: height+'px'}">
      <!-- 下拉刷新 -->
      <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
        <text class="indicator-text">Refreshing ...</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <div class="cell" v-for="infos in topics">
        <div @click="onLinkTo" class="panel">
          <text class="tp-title">{{infos.title}}</text>
          <text class="tp-type">{{infos.type}}</text>
          <text class="tp-address">{{infos.address}}</text>
        </div>
      </div>
    </scroller>
    <bottom-bar @tabTo="onTabTo"></bottom-bar>
  </div>  
</template>
<script>
  import BottomBar from '@/components/BottomBar.vue'
  import { WxcSearchbar } from 'weex-ui'
  import util from '@/assets/util'
  const modal = weex.requireModule('modal')
  export default {
    components: { WxcSearchbar, BottomBar },
    data () {
      return {
        height: util.env.getPageHeight() - 100,
        showCancel: true,
        refreshing: false,
        topics: [
          {
            title: '新疆华特信息网络股份有限公司',
            type: '小型企业',
            address: '新疆-乌鲁木齐'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          },
          {
            title: '新疆华特信息网络股份有限公司',
            type: '小型企业',
            address: '新疆-乌鲁木齐'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          },
          {
            title: '新疆华特信息网络股份有限公司',
            type: '小型企业',
            address: '新疆-乌鲁木齐'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          },
          {
            title: '新疆华特信息网络股份有限公司',
            type: '小型企业',
            address: '新疆-乌鲁木齐'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          },
          {
            title: '新疆华特信息网络股份有限公司',
            type: '小型企业',
            address: '新疆-乌鲁木齐'
          }, {
            title: '张掖市绿禾农产品营销有限公司',
            type: '中型企业',
            address: '甘肃-张掖'
          }
        ]
      }
    },
    methods: {
      onTabTo (_result) {
        let _key = _result.data.key || ''
        this.$router && this.$router.push('/' + _key)
      },
      searchbarCancelClick () {
        this.$router && this.$router.push('/client/add')
      },
      onloading (event) {
        modal.toast({ message: 'Loading', duration: 1 })
        this.loadinging = true
        setTimeout(() => {
          this.loadinging = false
        }, 2000)
      },
      onrefresh (event) {
        modal.toast({ message: 'Refreshing', duration: 1 })
        this.refreshing = true
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
      },
      onpullingdown (event) {
        console.log("dy: " + event.dy)
        console.log("pullingDistance: " + event.pullingDistance)
        console.log("viewHeight: " + event.viewHeight)
      },
      onLinkTo () {
        this.$router && this.$router.push('/client/detail')
      }
    }
  }
</script>
<style scoped>
  .header {
    position: fixed;
    top: 0;
    height: 84px;
    left: 0;
    z-index: 100;
  }
  .scroller {
    margin-top: 100px;
  }
  .cell {
    padding-top: 25px;
    padding-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 15px;
    background-color: #ffffff;
  }
  .tp-title {
    margin-bottom: 10px;
    font-size: 40px;
  }
  .tp-type, .tp-address { 
    color: #666666;
  }
</style>