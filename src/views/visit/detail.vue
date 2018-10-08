<template>
  <div class="main">	
    <wxc-minibar title="拜访记录详情" :left-button="leftButton" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    <!-- 拜访记录详情 -->
    <div class="visit-detail">
      <text class="visit-xqh1">新疆 是否水电费撒冯份有限公司</text>
      <text class="visit-xqp">客户拜访人：张某某总经理</text>
      <text class="visit-xqp">拜访人电话：13842****125</text>
      <text class="visit-xqp">有效商机：<i class="visit-i">135</i>条</text>
      <text class="visit-xqp">放弃商机：<i class="visit-i">15</i>条</text>
      <text class="visit-xqp">商机创建人：陈某某</text>
      <text class="visit-xqp">商机创建时间：2017-08-26</text>
    </div>
    <!-- 拜访记录 -->
    <div class="visit-bfjl">
      <div class="bfjl-title">
        <text class="bfjl-tit">拜访记录</text>
      </div>
      <div class="bfjl-cont">
        <wxc-simple-flow :list="testData" :themeColor="themeColor"></wxc-simple-flow>
      </div>
    </div>
  </div>
</template>
<script>
import {WxcMinibar , WxcSimpleFlow } from 'weex-ui'
const modal = weex.requireModule('modal')
export default {
  components: { WxcMinibar , WxcSimpleFlow },
  data: () => ({
    leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
    themeColor: {
      lineColor: '#0094de',
      pointInnerColor: '#0094de',
      pointBorderColor: '#0094de',
    },
      testData: [
      {
        'date': '2017-05-24 21:10:29',
        'desc': '撒旦法多少分的发的风格都是电饭锅是电饭锅但是的丰富和',
        'title': '陈某'
      },
      {
        'date': '2017-05-24 19:54:28',
        'desc': '撒旦法多少分的发的风格都是电饭锅是电饭锅但是的丰富和',
        'title': '李某'
      },
      {
        'date': '2017-05-24 19:50:21',
        'desc': '您以确定了方案',
        'title': '方案已上传'
      },
      {
        'date': '2017-05-24 19:49:03',
        'desc': '商家会在2个工作小时内电话或旺旺联系您',
        'title': '商家已接单'
      }
    ]
  }),
  methods: {  
  }
}
</script>
<style scoped>
  .visit-detail{
    width: 750px;
    background-color: #ffffff;
    padding-top: 40px;
    padding-bottom: 35px; 
   }
   .visit-xqh1{
    font-size: 38px;
    color: #333333;
    font-weight: bold;
    padding-bottom: 20px;
    padding-left: 40px;
    padding-right: 40px;
   }
   .visit-xqp{
    font-size: 30px;
    color:#666666;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 40px;
    padding-right: 40px;
    line-height: 30px;
   }
  .visit-i{
    color: #ff0000;
  }
  .visit-bfjl{ 
    background-color: #ffffff;
    margin-top: 6px;
  }
  .bfjl-title{
    height: 80px;
    margin-top: 20px;
    border-bottom-color: #dddddd;
    border-bottom-style: solid;
    border-bottom-width: 1px;
  }
  .bfjl-tit{ 
    width: 210px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-weight: bold;
    color: #555555;
    border-bottom-color: #0094de;
    border-bottom-style: solid;
    border-bottom-width: 5px;
  }
  .bfjl-cont{
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
  
</style>