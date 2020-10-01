import Vue from 'vue'
import App from './App.vue'
import router from './router'
const axios = require("axios");

axios.interceptors.request.use(
  config => {
    return {
      ...config,
      headers: {
        Authorization: "apikey 29250f0436aaedc6e03a725b5b39a45b4d248a684a7003a47e301903c1298002",
        'Access-Control-Allow-Origin': "*",
        'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token"
      }
    };
  },
  error => Promise.reject(error)
);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
