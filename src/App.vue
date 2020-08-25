<template>
  <v-app id="inspire">
    <!-- サイドナビゲーションメニュー -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item-title style="padding-left: 12px;">MENU</v-list-item-title>

        <!-- ホーム -->
        <router-link to="/">
          <v-list-item link class="menu-item-1">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ホーム</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- サービス紹介 -->
        <router-link to="/">
          <v-list-item link class="menu-item">
            <v-list-item-action>
              <v-icon>mdi-silverware-fork-knife</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>サービス紹介</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- お店を探す -->
        <router-link to="/shop">
          <v-list-item link class="menu-item">
            <v-list-item-action>
              <v-icon>mdi-store</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>お店を探す</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- よくある質問 -->
        <router-link to="/question">
          <v-list-item link class="menu-item">
            <v-list-item-action>
              <v-icon>mdi-help-circle-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>よくある質問</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- お問い合わせ -->
        <router-link to="/question">
          <v-list-item link class="menu-item">
            <v-list-item-action>
              <v-icon>mdi-email-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>お問い合わせ</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- 運営会社 -->
        <router-link to="/company">
          <v-list-item link class="menu-item">
            <v-list-item-action>
              <v-icon>mdi-office-building</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>運営会社</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <!-- ログイン -->
        <router-link to="/login">
          <v-list-item link class="menu-item">
            <v-list-item-action>
              <v-icon>mdi-login-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>ログイン</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar app color="gray lighten-4" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="header_title">BOPS Meal.</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <BottomNav></BottomNav>

    <!-- フッター -->
    <!-- <v-footer color="gray lighten-4" app>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>-->
  </v-app>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue";

export default {
  data: () => ({
    drawer: false // サイドナビゲーションメニュートグル
  }),
  components: {
    BottomNav
  }
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}
.header_title {
  font-family: "Kaushan Script", cursive;
}
</style>
<style style="scoped" lang="scss">
.menu-item {
  border-bottom: 1px solid rgb(200, 200, 200);
}
.menu-item-1 {
  margin-top: 8px;
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
}
</style>