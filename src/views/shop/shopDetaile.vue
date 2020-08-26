<template>
  <div>
    <div class="chefImg">
      <img src="@/assets/chef1.jpg" alt />
    </div>
    <div class="section1">
      <h2>float 五反田</h2>
      <h3>シェフ：高橋健吾</h3>
      <h3>ジャンル：イタリアン</h3>
      <br />
      <div class="text1">
        <p>
          大阪府出身。料理人歴16年。
          <br />高校卒業後大阪のホテルに入社。その後渡仏して8年、ビストロ、星付きレストランで修行。
          <br />パリ、東京で料理長を経験。南青山のレストラン「IKU青山」で自然栽培の野菜やストレスフリーで育てられた牛肉、豚肉など身体に安心安全な食材と出会い食の大切さを学ぶ。
          <br />イタリア料理をベースの家庭料理を提供します。
          アレルギーや苦手な食材等対応致します。
        </p>
      </div>
    </div>
    <router-link to="/Order">
      <div class="order-button">
        <v-btn rounded color="orange lighten-1" class="text-h6">注文する</v-btn>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
h2 {
  font-size: 2rem;
  font-weight: normal;
}
h3 {
  font-weight: normal;
}
.section1 {
  margin: 0 4%;
  border-bottom: 1px solid gray;
}
.order-button {
  margin-top: 10%;
  text-align: center;
}
</style>