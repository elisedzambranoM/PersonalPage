import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

Vue.use (VueAnalytics, { 
  id: 'G-S1XHFV7SPE', 
  router 
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



