import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use (VueAnalytics, { 
  id: 'G-BY8DC09RDX', 
  router 
});

