import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!

    require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkVkc29uIE4uIE5hc2NpbWVudG8iLCJlbWFpbCI6ImVkc25hc2NpbWVudG84OUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjA4NDcxOTk4LCJleHAiOjE2MDg3MzExOTh9._idvARuSaOeDzE-Z_zA6nojhzOPryD5i0Zah0Aj36TU' 

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')