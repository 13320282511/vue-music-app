// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
import 'common/less/base.less'
/* eslint-disable no-new */
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.jpg')
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
