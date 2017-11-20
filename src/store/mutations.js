/**
 * Created by zj on 2017/9/5.
 */
import * as types from './mutation-types'
const mutations = {
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  }
}

export default mutations
