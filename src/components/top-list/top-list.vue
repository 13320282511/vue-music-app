<template>
  <div class="top_list">
    <h1>{{topList.topTitle}}</h1>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'top-list',
    data() {
      return {
        msg: 90
      }
    },
    computed: {
      ...mapGetters({
        topList: 'TopList'
      })
    }
  }
</script>
<style lang="less">
  @import '~common/less/variable';

  .top_list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background-color: @color-backgroud;
    color: #fff;
  }
</style>
