import Vue from 'vue'
import App from './App'
import router from './router'
//부트스트랩 셋팅
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
//부트
Vue.use(BootstrapVue)


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
