import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import Home from './Home.vue';
import Explore from './Explore.vue';


Vue.use(VueMaterial);


const routes = {
  '/': Home,
  '/explore': Explore,
};


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    },
  },
  render(h) { return h(this.ViewComponent); },
}).$mount('#app');


/*
  Router
  when given a url -> return the corresponding component

  mapping
    '/' ->
*/
