<template>
  <div class="home">
    <!-- フィルターを適用している。パイプ|を使用する。 -->
    <h2>{{ title | upperCase }}</h2>
    <h3>{{ subtitle | lowerCase }}</h3>
    <p>Vuex({{ count }})</p>

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
    count() {
      /* Vuexのcountを取ってきている。 */
      return this.$store.state.count
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
