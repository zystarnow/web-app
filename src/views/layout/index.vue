<template>
  <div>
    <router-view/>
    <bottom-bar @tabTo="onTabTo"></bottom-bar>
  </div>
</template>
<script>
  import BottomBar from '@/components/BottomBar.vue'
  export default {
    components: {
      'bottom-bar': BottomBar
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
</style>
