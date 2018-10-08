<template>
  <div class="footer">
    <div class="bar-item" @click="tabTo('home')">
      <text class="bar-ic iconfont" :class="[this.isActive('home')]">&#xe660;</text>
      <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
    </div>
    <div class="bar-item" @click="tabTo('client')">
      <text class="bar-ic iconfont" :class="[this.isActive('client')]">&#xe605;</text>
      <text class="bar-txt" :class="[this.isActive('client')]">客户列表</text>
    </div>
    <div class="bar-item" @click="tabTo('visit')">
      <text class="bar-ic iconfont" :class="[this.isActive('visit')]">&#xe744;</text>
      <text class="bar-txt" :class="[this.isActive('visit')]">拜访记录</text>
    </div>
    <div class="bar-item" @click="tabTo('my')">
      <text class="bar-ic iconfont" :class="[this.isActive('my')]">&#xe639;</text>
      <text class="bar-txt" :class="[this.isActive('my')]">个人</text>
    </div>
  </div>
</template>
<script>
// var modal = weex.requireModule('modal')
export default {
  data () {
    return {
      pIndexKey: ''
    }
  },
  methods: {
    isActive: function (_c) {
      return this.pIndexKey === _c ? 'bar-active' : ''
    },
    tabTo (_key) {
      if (this.pIndexKey === _key) return
      this.pIndexKey = _key
      this.$emit('tabTo', {
        status: 'tabTo',
        data: {
          key: _key
        }
      })
    }
  }
}
</script>
<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;right: 0;
    height: 100px;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 1px;
    border-top-color: #d9d9d9;
    background-color: #fafafa;
  }
  .bar-item{
    flex: 1;
  }
  .bar-txt,.bar-ic{
    color:#666666;
    text-align: center;
  }
  .bar-active{
    color:#00a2e6;
  }
  .bar-ic{
    padding-top: 14px;
    font-size: 38px;
  }
  .bar-txt{
    font-size: 22px;
    padding-top: 2px;
  }
</style>
