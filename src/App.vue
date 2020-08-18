<template>
  <v-app id="inspire">
    <!-- サイドナビゲーションメニュー -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <!-- Home -->
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Store -->
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-store</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Store</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Contact -->
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Shop></Shop>
    </v-main>

    <!-- フッター -->
    <v-footer color="indigo" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Shop from "./views/Shop.vue";

export default {
  data: () => ({
    drawer: false, // サイドナビゲーションメニュートグル
  }),
  components: {
    Shop,
  },
};
</script>
