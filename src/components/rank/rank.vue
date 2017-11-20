<template>
  <div class="rank_top_list">
    <ul>
      <li v-for="item in slider" @click="selectItem(item)">
        <a>
          <img v-lazy="item.picUrl" :alt="item.topTitle"/>
          <span>{{item.listenCount / 10000}}万</span>
        </a>
        <div class="rank_top_list_right">
          <div class="right-flex">
            <h1>{{item.topTitle}}</h1>
            <div v-for="(itemSong,index) in item.songList" class="song_list">
              {{index + 1}}
              <span>{{itemSong.songname}}</span>
              -{{itemSong.singername}}
            </div>
          </div>
        </div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  import { getData } from 'axiosApi/topList/top_list'
  import { mapMutations } from 'vuex'
  export default {
    name: 'rank',
    created() {
      this._getData()
    },
    data() {
      return {
        slider: []
      }
    },
    methods: {
      _getData() {
        let self = this
        getData().then(function (response) {
          self.slider = response.data
          // console.log(self.slider)
        }).catch(function (err) {
          console.log(err)
        })
      },
      selectItem(item) {
        this.$router.push({
          path: `/rank/${item.id}`
        })
        this.setTopList(item)
      },
      ...mapMutations({
        setTopList: 'SET_TOP_LIST'
      })
    }
  }
</script>
<style lang="less">
  .rank_top_list {
    margin: 10px;
    li {
      display: flex;
      margin-bottom: 10px;
      & > a {
        display: block;
        width: 100px;
        height: 100px;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        span {
          color: #fff;
          line-height: 12px;
          position: absolute;
          display: block;
          bottom: 10px;
          left: 10px;
          font-size: 9px;
        }
      }
      .rank_top_list_right {
        flex: 1;
        text-align: left;
        margin: 0 10px 0 15px;
        min-width: 0;
        display: flex;
        justify-content: center;
        flex-direction: column-reverse;
        .right-flex {

        }
        h1 {
          color: #000;
          font-size: 16px;
          font-weight: normal;
        }
        .song_list {
          font-size: 14px;
          color: rgba(0, 0, 0, .5);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span {
            color: #000;
          }
        }
      }
    }
  }


</style>
