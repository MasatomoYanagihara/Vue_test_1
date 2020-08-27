<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col v-for="n in 12" :key="n" class="d-flex child-flex pa-1" cols="4">
              <v-card flat tile class="d-flex">
                <v-img :src="image_src" aspect-ratio="1" class="grey lighten-2">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center"></v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      image_src: require("@/assets/happosai.jpg") //imgタグのsrc属性にバインディングする場合はrequireがいる
    };
  }
};
</script>
<style lang="scss" scoped>
</style>