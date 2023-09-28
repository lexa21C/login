import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Geocoder from "@pderas/vue2-geocoder";
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(Geocoder, {
  defaultCountryCode: null, // e.g. 'CA'
  defaultLanguage:    null, // e.g. 'en'
  defaultMode:        'address', // or 'lat-lng'
  googleMapsApiKey:   GOOGLE_MAPS_API_KEY
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
