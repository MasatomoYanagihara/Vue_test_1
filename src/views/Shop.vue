<template>
  <div>
    <h2>店舗一覧</h2>

    <!-- <Card v-for="post in posts" :key="post.id" :post="post.fields" /> -->

    <v-container>
      <v-row no-gutters :justify="justify">
        <Card v-for="post in posts" :key="post.id" :post="post.fields"></Card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Shop",
  data() {
    return {
      posts: [],
      justify: "center"
    };
  },
  components: {
    Card
  },
  created() {
    if (this.$store.state.shopData === false) {
      axios
        .get(
          "https://firestore.googleapis.com/v1/projects/プロジェクトID/databases/(default)/documents/shop/"
        )
        .then(response => {
          this.posts = response.data.documents;
          // this.$store.commit("shopDataRoaded");
          console.log("Shopデータgetリクエスト");
        });
    }
  }
};
</script>
