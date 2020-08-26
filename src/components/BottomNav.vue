<template>
  <!-- xsサイズのみ表示する -->
  <v-bottom-navigation
    :value="activeBtn"
    color="orange lighten-1"
    app
    class="d-flex d-sm-none pt-3"
  >
    <router-link to="/">
      <v-btn>
        <span>ホーム</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </router-link>

    <v-btn>
      <span>注文</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn>
      <span>マイページ</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  }
};
</script>