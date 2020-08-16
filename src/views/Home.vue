<template>
  <div class="home">
    <!-- upperCaseフィルターを適用している。 -->
    <h2>{{ title | upperCase }}</h2>
    <h3>{{ subtitle | upperCase }}</h3>

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
  components: {}
};
</script>
