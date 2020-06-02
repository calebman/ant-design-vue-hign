import Vue from 'vue'
import Antd from 'ant-design-vue'
import AntDesignVueHigh from '../../packages/index'
import App from './App.vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(Antd)
Vue.use(AntDesignVueHigh)
new Vue({
  render: h => h(App)
}).$mount('#app')
