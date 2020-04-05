// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import store from './store'
import echarts from 'echarts'
import VCharts from 'v-charts'


Vue.prototype.$echarts = echarts
Vue.use(VCharts)
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  echarts,
  store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
