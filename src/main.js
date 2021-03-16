import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js';
import vuetify from './plugins/vuetify';
import "vuetify/dist/vuetify.min.css";
import store from './store';
Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: Routes
});
new Vue({
  store,
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
