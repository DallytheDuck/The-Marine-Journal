import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

import Home from './Home.vue';
import Explore from './Explore.vue';
import Seafloor from './Seafloor.vue';
import Water from './Water.vue';
import Animals from './Animals.vue';
import LongandLat from './LongandLat.vue';
import PlateTectonics from './PlateTectonics.vue';
import PlateBoundaries from './PlateBoundaries.vue';
import template from './template.vue';


Vue.use(VueMaterial);


const routes = {
  '/': Home,
  '/explore': Explore,
  '/seafloor': Seafloor,
  '/water': Water,
  '/animals': Animals,
  '/longandlat': LongandLat,
  '/platetectonics': PlateTectonics,
  '/plateboundaries': PlateBoundaries,
  '/template': template,
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
