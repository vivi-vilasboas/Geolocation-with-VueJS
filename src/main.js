import Vue from 'vue'
import App from './App.vue'
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGeolocation)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAZX1bpvg_l0bGnEM-nm6qMAmQzxypwlgA'
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
