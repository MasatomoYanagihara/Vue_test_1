<template>
  <div id="app">
    <p>いいね({{ halfNumber }})</p>
  </div>
</template>

<script>
export default {
  props: ["goodNumber"], // goodNumberというpropsを定義。propsはキャメルケースで書く。
  computed: {
    halfNumber() {
      return this.goodNumber / 2;
    }
  }
};
</script>
