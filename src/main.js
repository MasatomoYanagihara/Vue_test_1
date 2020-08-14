import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import LikeNumber from "./components/LikeNumber"; // LikeNumberコンポーネントをグローバル登録する為にimportする。

Vue.config.productionTip = false;

Vue.component('LikeNumber', LikeNumber) // LikeNumberコンポーネントをグローバル登録。

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
