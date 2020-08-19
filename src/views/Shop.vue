<template>
  <div>
    <h2 class="ten">店舗一覧</h2>

    <Card v-for="post in posts" :key="post.id" :post="post.fields" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import axios from "axios";

export default {
  name: "Shop",
  data() {
    return {
      posts: [],
    };
  },
  components: {
    Card,
  },
  created() {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/プロジェクトID/databases/(default)/documents/shop/"
      )
      .then((response) => {
        this.posts = response.data.documents;
      });
  },
};
</script>

<style></style>
