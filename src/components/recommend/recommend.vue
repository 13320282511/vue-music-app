<template>
  <div>
    <h1 v-for="item in slider">
      <p>{{item.id}}</p>
      <img v-lazy="item.picUrl"/>
    </h1>
  </div>
</template>
<script>
  import { getTopList } from 'api/rank'
  import { ERR_OK } from 'api/config'
  export default {
    name: 'rank',
    created() {
      this._getTopList()
    },
    data() {
      return {
        slider: []
      }
    },
    methods: {
      _getTopList() {
        getTopList().then((res) => {
          if (res.code === ERR_OK) {
            // console.log(res.data.slider)
            this.slider = res.data.slider
          }
        })
      }
    }
  }
</script>
<style lang="less">

</style>
