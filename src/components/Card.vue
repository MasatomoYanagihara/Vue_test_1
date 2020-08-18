<template>
  <!-- カードコンポーネント -->
  <v-card class="mx-auto my-12" max-width="320">
    <v-img
      height="240"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <!-- 店名 -->
    <v-card-title>{{ shopDetail.name }}</v-card-title>

    <!-- 水平線 -->
    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <!-- ジャンル -->
      <div class="my-4 subtitle-1">
        {{ shopDetail.ganre }}
      </div>

      <!-- 説明文 -->
      <div>
        {{ shopDetail.explanation }}
      </div>
      <div>
        営業時間 {{ shopDetail.openTime }} 〜 {{ shopDetail.closeTime }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
// import axios from 'axios';

export default {
  data: () => ({
    posts: [],
    shopDetail: {
      name: "店名",
      ganre: "ジャンル",
      explanation: "説明文",
      openTime: "11:00",
      closeTime: "22:00",
    },
  }),
};
</script>
