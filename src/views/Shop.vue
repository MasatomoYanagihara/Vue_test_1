<template>
  <div>
    <h2 class="ten">店舗一覧</h2>
    <div class="test">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Shop",
  components: {
    Card,
  },
};
</script>

<style>
.test {
  display: flex;
}
</style>
