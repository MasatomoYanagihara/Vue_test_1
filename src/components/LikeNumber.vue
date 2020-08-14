<template>
  <div id="app">
    <p>いいね({{ goodNumber / 2 }})</p>
  </div>
</template>

<script>
export default {
  props: ["goodNumber"] // goodNumberというpropsを定義
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>
