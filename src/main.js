import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

Vue.axios = Vue.prototype.$http = axios.create({
  baseURL: 'https://frame-sharpening.herokuapp.com'
})

//const cors = require('cors');
/*Vue.use.(cors({
  origin: 'http://localhost:8082/'
}))*/

//Vue.use(cors)