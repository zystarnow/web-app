<template>
  <div class="main">
    <div class="header">
      <wxc-searchbar :always-show-cancel="showCancel" cancel-label="添加" theme="gray" @wxcSearchbarCancelClicked="searchbarCancelClick"></wxc-searchbar>
    </div>    
    <!-- 拜访记录列表 -->
    <scroller class="scroller" :style="{height: height+'px'}">
        <!-- 下拉刷新 -->
        <refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
          <text class="indicator-text">Refreshing ...</text>
          <loading-indicator class="indicator"></loading-indicator>
        </refresh>
        <div class="cell" v-for="infos in lists">
          <div @click="onLinkTo" class="panel">
            <text class="tp-title">{{infos.title}}</text>
            <text class="tp-type">{{infos.type}}</text>
            <text class="tp-address">{{infos.address}}</text>
          </div>
        </div>
        <!-- loading加载 -->
        <!--<loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
          <text class="indicator-text">Loading ...</text>
          <loading-indicator class="indicator"></loading-indicator>
        </loading>-->
    </scroller>
    <bottom-bar @tabTo="onTabTo"></bottom-bar>
  </div>
</template>
<script>
  import util from '@/assets/util'
  import BottomBar from '@/components/BottomBar.vue'
  import { WxcSearchbar } from 'weex-ui'
  const modal = weex.requireModule('modal')
  export default {
    components: { WxcSearchbar, BottomBar },
    data () {
      return {
        height: util.env.getPageHeight() - 140,
        showCancel: true,
        refreshing: false,
        loadinging: false,
        lists: [{
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
          }]
      }
    },
    methods: {
      onTabTo (_result) {
        let _key = _result.data.key || ''
        this.$router && this.$router.push('/' + _key)
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
        this.$router && this.$router.push('/visit/detail')
      },
      searchbarCancelClick () {
        this.$router && this.$router.push('/visit/add')
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
  .panel {
    margin-bottom: 15px;
    background-color: #ffffff;
  }
  .title {
    font-size: 40px;
    padding-top: 35px;
    padding-bottom: 16px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .desc {
    lines: 2;
    color: #666666;
    font-size: 32px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .time {
    color: #999999;
    font-size: 28px;
    text-align: right;
    padding-right: 40px;
    margin-top:10px;
    margin-bottom: 20px;
  }
 /* 下拉刷新 */
 .refresh {
    width: 750;
    align-items: center;
  }
  .indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: #0000ff;
  } 
 /*loading加载*/
  .loading {
    width: 750;
    align-items: center;
  }
  .indicator-text {
    color: #888888;
    font-size: 42px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 40px;
    width: 40px;
    color: #0000ff;
  }  
</style>