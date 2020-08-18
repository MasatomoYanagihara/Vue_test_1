import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  /* データを入れるとこ */
  state: {
    count: 2,
  },
  /* stateを変更する場合はここでのみする。 */
  mutations: {
    increment(state, number) {
      state.count += number;
    },
  },
  /* 非同期処理を書くところ */
  actions: {},
  modules: {},
  /* 算出プロパティ的なもの */
  getters: {
    doubleCount: (state) => state.count * 2,
    tripleCount: (state) => state.count * 3,
  },
});
