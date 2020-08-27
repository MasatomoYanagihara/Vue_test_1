<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col v-for="item in items" :key="item.id" class="d-flex child-flex pa-1" cols="4">
              <v-card flat tile class="d-flex">
                <v-img :src="item.image_src" aspect-ratio="1" class="grey lighten-2">
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
  props: ["item"],
  data() {
    return {
      items: [
        {
          id: 1,
          image_src: require("@/assets/food/food1.jpg")
        },
        {
          id: 2,
          image_src: require("@/assets/food/food2.jpg")
        },
        {
          id: 3,
          image_src: require("@/assets/food/food3.jpg")
        },
        {
          id: 4,
          image_src: require("@/assets/food/food4.jpg")
        },
        {
          id: 5,
          image_src: require("@/assets/food/food5.jpg")
        },
        {
          id: 6,
          image_src: require("@/assets/food/food6.jpg")
        },
        {
          id: 7,
          image_src: require("@/assets/food/food7.jpg")
        },
        {
          id: 8,
          image_src: require("@/assets/food/food8.jpg")
        },
        {
          id: 9,
          image_src: require("@/assets/food/food9.jpg")
        },
        {
          id: 10,
          image_src: require("@/assets/food/food10.jpg")
        },
        {
          id: 11,
          image_src: require("@/assets/food/food11.jpg")
        },
        {
          id: 12,
          image_src: require("@/assets/food/food12.jpg")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>