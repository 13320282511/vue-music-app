<template>
  <div class="tab">
    <router-link to="/recommend" tag="div">
      <span>推荐</span>
    </router-link>
    <router-link to="/rank" tag="div">
      <span>排行</span>
    </router-link>
    <router-link to="/search" tag="div">
      <span>搜索</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'tab',
    data() {
      return {}
    }
  }
</script>
<style scoped="stylus" rel="stylesheet/stylus">

</style>
