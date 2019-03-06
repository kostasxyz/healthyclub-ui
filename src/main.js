import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#3dc2d0',
    accent: '#f15a57',
    primaryLight: '#f7fdfd'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#hc-app');
