import Vue from 'vue';
import VueMaterial from 'vue-material';

import App from './App.vue';


Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
