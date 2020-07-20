import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './assets/lib/rem'
import router from './router'
import store from './store'

import { Button, Field, Icon  } from 'vant';
Vue.use(Button).use(Field).use(Icon);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
