import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vue2Filters from 'vue2-filters';
import VueClipBoard from 'vue-clipboard2';

Vue.config.productionTip = false;
Vue.use(Vue2Filters);
Vue.use(VueClipBoard);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');




