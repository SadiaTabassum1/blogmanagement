import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});
new Vue({
  store,
  vuetify,
  router:router,
  render: h => h(App),
}).$mount('#app')
