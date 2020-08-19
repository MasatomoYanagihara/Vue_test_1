<template>
  <div>
    <h2 class="ten">店舗一覧</h2>

    <Card v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Shop",
  data() {
    return {
      posts: [
        {
          id: 1,
          shopName: "店名１",
          shopGanre: "和食",
          openTime: "11:00",
          closeTime: "22:00",
        },
        {
          id: 2,
          shopName: "店名２",
          shopGanre: "中華",
          openTime: "10:30",
          closeTime: "21:00",
        },
        {
          id: 3,
          shopName: "店名３",
          shopGanre: "洋食",
          openTime: "10:00",
          closeTime: "21:30",
        },
        {
          id: 4,
          shopName: "店名４",
          shopGanre: "洋食",
          openTime: "10:00",
          closeTime: "21:30",
        },
        {
          id: 5,
          shopName: "店名５",
          shopGanre: "洋食",
          openTime: "10:00",
          closeTime: "21:30",
        },
      ],
    };
  },
  components: {
    Card,
  },
};
</script>

<style></style>
