<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
import util from '@/assets/util'
export default {
  name: 'App',
  created () {
    util.initIconFont()
  }
}
</script>
<style scoped>
  .wrapper {
    background-color: #f2f2f2;
  }
</style>
