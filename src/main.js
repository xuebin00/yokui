import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './styles/reset.less'

import Button from './packges/button/index'
import Dialog from './packges/dialog/index'
import Toast from './packges/toast/index'
import Notify from './packges/notify/index'
import actionsheet from './packges/actionsheet/index'
import picker from './packges/picker/index'

const components = [
  Button,
  Dialog,
  actionsheet,
  picker
]

components.forEach(component => {
  Vue.component(component.name, component)
})

Vue.config.productionTip = false

Vue.prototype['$toast'] = Toast;
Vue.prototype['$notify'] = Notify;


new Vue({
  render: h => h(App),
  router
}).$mount('#app')