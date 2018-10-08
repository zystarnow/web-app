<template>
  <div class="main">
    <wxc-minibar title="添加新客户" :left-button="leftButton" background-color="#009ff0" text-color="#ffffff" @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"></wxc-minibar>
    <scroller class="scroller">
      <wxc-cell label="企业名称" :has-arrow="false">
        <input slot="title" type="text" placeholder="请输入企业名称" class="input"/>
      </wxc-cell>
      <wxc-cell label="企业类型" :has-arrow="true" :title="formData.typeName" @wxcCellClicked="typeClicked"></wxc-cell>
      <wxc-cell label="住所地址" :has-arrow="true" :title="formData.address" @wxcCellClicked="addressClicked"></wxc-cell>
      <wxc-cell label="所属领域" :has-arrow="true" :title="formData.territorys" @wxcCellClicked="territorysClicked"></wxc-cell>
      <div class="item-button">
        <wxc-button type="red" text="确定提交" @wxcButtonClicked="showLoading"></wxc-button>
      </div>
    </scroller>
    <wxc-popup width="500" pos="right" :show="isShowType" @wxcPopupOverlayClicked="overlayTypeClicked">
      <text class="type-text">请选择企业类型</text>
      <wxc-radio :list="typeList" @wxcRadioListChecked="wxcRadioListChecked"></wxc-radio>
    </wxc-popup>
    <wxc-city ref="wxcCityPush" :sourceData="sourceData" @wxcCityItemSelected="citySelect"></wxc-city>
    <wxc-popup width="600" pos="right" :show="isShowTerritorys" @wxcPopupOverlayClicked="overlayTerritorysClicked">
      <text class="type-text">请选择所属领域</text>        
      <wxc-checkbox-list class="checkbox-list" :list="territorysList" @wxcCheckBoxListChecked="territorysChecked"></wxc-checkbox-list>
    </wxc-popup>
    <wxc-loading :show="isShowLoading" loading-text="正在加载中"></wxc-loading>
  </div>
</template>
<script>
import sourceData from '@/assets/city'
import { WxcMinibar, WxcCell, WxcButton, WxcPopup, WxcLoading, WxcRadio, WxcCity, WxcCheckbox, WxcCheckboxList } from 'weex-ui'
export default {
  components: { WxcMinibar, WxcCell, WxcButton, WxcPopup, WxcLoading, WxcRadio, WxcCity, WxcCheckbox, WxcCheckboxList },
  data () {
    return {
      formData: {
        type: null,
        typeName: '请选择',
        address: '请选择',
        territorys: '请选择'
      },
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
      isShowLoading: false,
      isShowType: false,
      typeList: [
        { title: '大型企业', value: 0 },
        { title: '中型企业', value: 1 },
        { title: '小型企业', value: 2 },
        { title: '微型企业', value: 3 }
      ],
      sourceData: sourceData,
      isShowTerritorys: false,
      cellStyleCheckbox: {
        'padding-top': '10px'
      },
      territorysList: [
        { title: '电子信息', value: { name: '电子信息', val: 'territorys1'} },
        { title: '交通运输', value: { name: '交通运输', val: 'territorys2'} },
        { title: '传统制造业', value: { name: '传统制造业', val: 'territorys3'} },
        { title: '传统农业', value: { name: '传统农业', val: 'territorys4'} },
        { title: '传统服务业', value: { name: '传统服务业', val: 'territorys5'} },
        { title: '生物与新医药', value: { name: '生物与新医药', val: 'territorys6'} }
        // { title: '新材料', value: 'territorys7' },
        // { title: '航空航天', value: 'territorys8' },
        // { title: '高技术服务', value: 'territorys9' },
        // { title: '新能源与节能', value: 'territorys10' },
        // { title: '资源与环境', value: 'territorys11' },
        // { title: '先进制造与自动化', value: 'territorys12' },
        // { title: '现代农业', value: 'territorys13' },
        // { title: '非高新领域', value: 'territorys14' }
      ]
    }
  },
  methods: {
    minibarLeftButtonClick() {
      this.$router.go(-1)
    },
    showLoading () {
      this.isShowLoading = true
      setTimeout(() => {
        this.isShowLoading = false
        // this.isShowMask = true
      }, 1000);
    },
    typeClicked () {
      this.isShowType = true      
    },
    overlayTypeClicked () {
      this.isShowType = false
    },
    wxcRadioListChecked (e) {
      this.formData.type = e.value
      this.formData.typeName = e.title
      setTimeout(() => {
        this.isShowType = false
      }, 10)
    },
    addressClicked () {
      this.$refs['wxcCityPush'].show()
    },
    citySelect (e) {
      this.formData.address = e.item.name
    },
    territorysClicked () {
      this.isShowTerritorys = true
    },
    overlayTerritorysClicked () {
       setTimeout(() => {
        this.isShowTerritorys = false
      }, 10)
    },
    territorysChecked (e) {
      this.formData.territorys = e.checkedList.map((item) => {
        return item.name
      }).toString();
    },
    wxcCheckBoxItemChecked (e) {
      console.log(e)
    }
  }
}
</script>
<style scoped>
  .main {
    background-color: #ffffff;
  }
  .input {
    font-size: 30px;
  }
  .type-text {
    padding-top: 30px;
    padding-bottom: 15px;
    padding-left: 20px;
  }
  .item-button {
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;
  }
</style>
