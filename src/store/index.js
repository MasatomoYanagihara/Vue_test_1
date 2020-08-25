import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  /* データを入れるとこ */
  state: {
    shopData: [],
    getShopData: false
  },
  /* stateを変更する場合はここでのみする。 */
  mutations: {
    shopDataRoaded() {
      this.state.shopData = true;
    },
  },
  /* 非同期処理を書くところ */
  actions: {},
  modules: {},
  /* 算出プロパティ的なもの */
  getters: {},
});
