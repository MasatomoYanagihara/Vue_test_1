<template>
  <div>
    <!-- カードコンポーネント -->
      <v-col cols="12">
        <v-card class="mx-auto my-0" max-width="320px">
          <v-img height="240" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

          <!-- 店名 -->
          <v-card-title>{{ post.shopName.stringValue }}</v-card-title>

          <!-- 水平線 -->
          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <v-row align="center" class="mx-0"></v-row>

            <!-- ジャンル -->
            <div class="my-4 subtitle-1">{{ post.shopGanre.stringValue }}</div>

            <!-- 説明文 -->
            <div>
              営業時間 {{ post.openTime.stringValue }} 〜
              {{ post.closeTime.stringValue }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  props: ["post"]
};
</script>
