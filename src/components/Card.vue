<template>
  <!-- カードコンポーネント -->
  <v-card class="mx-auto my-12" max-width="320">
    <v-img
      height="240"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <!-- 店名 -->
    <v-card-title>{{ post.shopName.stringValue }}</v-card-title>

    <!-- 水平線 -->
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <!-- ジャンル -->
      <div class="my-4 subtitle-1">
        {{ post.shopGanre.stringValue }}
      </div>

      <!-- 説明文 -->
      <div>
        営業時間 {{ post.openTime.stringValue }} 〜
        {{ post.closeTime.stringValue }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
// import axios from 'axios';

export default {
  props: ["post"],
};
</script>
