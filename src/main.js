import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LikeNumber from "./components/LikeNumber"; // LikeNumberコンポーネントをグローバル登録する為にimportする。
import vuetify from "./plugins/vuetify";
import axios from 'axios'


Vue.config.productionTip = false;

/* LikeNumberコンポーネントをグローバル登録。 */
Vue.component("LikeNumber", LikeNumber);

/* 文字列を大文字にするフィルターupperCaseをグローバル登録。 */
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount("#app");
