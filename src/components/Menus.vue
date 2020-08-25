<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="gray" v-bind="attrs" v-on="on">ジャンルを選択する</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="ganreSelect">
          <router-link to="/wasyoku">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "和食", ganre: "wasyoku" },
      { title: "中華", ganre: "chuka" },
      { title: "イタリアン", ganre: "itarian" },
      { title: "フレンチ", ganre: "french" }
    ]
  }),
  methods: {
    ganreSelect() {
      console.log();
    }
  }
};
</script>
<style lang="scss" scoped>
.v-application a {
  text-decoration: none;
  color: black;
}
</style>