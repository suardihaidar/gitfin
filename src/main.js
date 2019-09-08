import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import VueAxios from "vue-axios";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";

Vue.use(BootstrapVue, VueAxios, axios);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
