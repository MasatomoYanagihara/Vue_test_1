<template>
  <div>
    <h2>店舗一覧</h2>
    <div class="select-box">
      <v-select
        :items="items"
        label="ジャンルを選択"
        outlined
        color="rgb(200, 200, 200)"
        dense
        v-model="selectGanre"
      ></v-select>
    </div>

    <!-- <Card v-for="post in posts" :key="post.id" :post="post.fields" /> -->

    <v-container>
      <v-row no-gutters :justify="justify">
        <Card v-for="post in this.$store.state.shopData" :key="post.id" :post="post.fields"></Card>
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
      justify: "center",
      items: ["和食", "中華", "イタリアン", "フレンチ"],
      selectGanre: ""
    };
  },
  components: {
    Card
  },
  created() {
    if (this.$store.state.getShopData === false) {
      axios
        .get(
          "https://firestore.googleapis.com/v1/projects//databases/(default)/documents/shop/"
        )
        .then(response => {
          // this.posts = response.data.documents;
          this.$store.state.shopData = response.data.documents
          this.$store.state.getShopData = true;
          console.log("Shop data get request.");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  text-align: center;
  margin-top: 8%;
  margin-bottom: 2%;
}
.select-box {
  margin: 0 8% 0 8%;
}
</style>