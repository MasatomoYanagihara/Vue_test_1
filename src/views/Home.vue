<template>
  <div class="home">
    <!-- フィルターを適用している。パイプ|を使用する。 -->
    <h2>{{ title | upperCase }}</h2>
    <h3>{{ subtitle | lowerCase }}</h3>
    <p>Vuex({{ doubleCount }})</p>
    <p>Vuex({{ tripleCount }})</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Welocome to Tokyo",
      subtitle: "Tokyo is great city"
    };
  },
  computed: {
    doubleCount() {
      /* Vuexのgetterをとってきている。 */
      return this.$store.getters.doubleCount;
    },
    tripleCount() {
      return this.$store.getters.tripleCount;
    }
  },
  filters: {
    /* lowerCaseフィルターをローカルで定義。 */
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
};
</script>
