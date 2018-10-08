<template>
  <div class="main">
    <wxc-minibar title="添加拜访记录" :left-button="leftButton" background-color="#009ff0" text-color="#ffffff"></wxc-minibar>
    <div class="visit-add">
      <wxc-cell label="客户标题" title="Weex Ui" @wxcCellClicked="wxcCellClicked" :has-margin="true">
        <input type="text" slot="title" placeholder="Input Text" class="input" :autofocus=true value="" />     
      </wxc-cell>
      <wxc-cell label="拜访时间" title="Weex Ui" :has-arrow="true" @wxcCellClicked="wxcCellClicked" :has-margin="true">
        <text class="btn-txt" v-if="!currentDate" @click="showCalendar" slot="title">单程日历</text>
        <text slot="title" v-if="currentDate" @click="showCalendar" class="text">{{currentDate}}</text>  
      </wxc-cell>
      <div class="btn">
        <text class="btn-txt">单程日历</text>
      </div>
      <div class="panel">
        
      </div>
      <div class="item-button">
        <wxc-button type="red" text="确定提交"></wxc-button>
      </div>
      <wxc-page-calendar :date-range="dateRange"
                       :animationType="animationType"
                       :selected-date="selectedDate"
                       :is-range="isRange"
                       :minibar-cfg="minibarCfg"
                       :selected-note="selectedNote"
                       @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
                       ref="wxcPageCalendar"></wxc-page-calendar>
    
    </div>
    
  </div>
    
</template>
<script>
  import { WxcMinibar, WxcCell, WxcPageCalendar, WxcButton } from 'weex-ui'
  export default {
    components: { WxcMinibar, WxcCell, WxcPageCalendar, WxcButton },
    data: () => ({
      leftButton: 'https://gw.alicdn.com/tfs/TB1cAYsbv2H8KJjy0FcXXaDlFXa-30-53.png',
      value: '',
      animationType: 'push',
      currentDate: '',
      selectedDate: ['2017-06-23'],
      isRange: false,
      dateRange: ['2010-01-01', '2020-01-01'],
      selectedNote: ['拜访'],
      minibarCfg: {
        title: '日期选择'
      },
       
    }),
    methods: {
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      },
      wxcCellClicked (e) {
        console.log(e)
      },
       wxcPageCalendarDateSelected (e) {
        this.selectedDate = e.date;
        this.currentDate = e.date;
      },
      showCalendar () {
        setTimeout(() => {
          this.$refs['wxcPageCalendar'].show();
        }, 10);
      }
    }
  }
</script>
<style scoped>
  .visit-add{ 
    background-color: #ffffff; 
  }
  .item-button {
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;
  }
</style>

