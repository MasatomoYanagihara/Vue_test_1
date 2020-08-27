<template>
  <div>
    <div class="title">
      <h1>MENU</h1>
    </div>
    <div class="section1">
      <h2>第１週のメニュー</h2>
      <div class="wrapper1">
        <img src="@/assets/menu/menu1.png" alt />
      </div>
      <div class="text">
        <p>
          ＜主菜＞
          <br />オクラの豚肉巻き
          <br />中華風肉みそ
          <br />からしマヨチキン
          <br />＜副菜＞
          <br />ピーマンとちくわのきんぴら
          <br />切り干し大根のはりはり漬け
          <br />金ごまきゅうり
          <br />ズッキーニの浅漬け
          <br />うずらたまごのカレーピクルス
          <br />きのこのねぎ塩炒め
        </p>
      </div>
      <div class="order-button">
        <router-link to="/order">
          <v-btn rounded color="orange lighten-1" class="text-h6">注文する</v-btn>
        </router-link>
      </div>
      <hr />
    </div>
    <div class="section2">
      <h2>第２週のメニュー</h2>
      <div class="wrapper1">
        <img src="@/assets/menu/menu2.png" alt />
      </div>
      <div class="text">
        <p>
          ＜主菜＞
          <br />牛ごぼう
          <br />梅しそ豚しゃぶ
          <br />ほぐし蒸し鶏
          <br />＜副菜＞
          <br />お豆とひじきの健康サラダ
          <br />なす南蛮
          <br />にんじんしりしり
          <br />ちくわとじゃがいもの煮物
          <br />オクラのナムル
        </p>
      </div>
      <div class="order-button">
        <router-link to="/order">
          <v-btn rounded color="orange lighten-1" class="text-h6">注文する</v-btn>
        </router-link>
      </div>
      <hr />
    </div>
    <div class="section3">
      <h2>第３週のメニュー</h2>
      <div class="wrapper1">
        <img src="@/assets/menu/menu3.png" alt />
      </div>
      <div class="text">
        <p>
          ＜主菜＞
          <br />チキンのトマト煮込み
          <br />ぶりの照り焼き
          <br />ごまだれ豚しゃぶ
          <br />＜副菜＞
          <br />温野菜
          <br />なすとパプリカのケチャップ炒め
          <br />ゆでブロッコリー
          <br />かぼちゃとさつまあげの煮物
          <br />ほうれん草とたまねぎのオープンオムレツ
          <br />ズッキーニとじゃがいものグラタン
        </p>
      </div>
      <div class="order-button">
        <router-link to="/order">
          <v-btn rounded color="orange lighten-1" class="text-h6">注文する</v-btn>
        </router-link>
      </div>
      <hr />
    </div>
    <div class="section4">
      <h2>第４週のメニュー</h2>
      <div class="wrapper1">
        <img src="@/assets/menu/menu3.png" alt />
      </div>
      <div class="text">
        <p>
          ＜主菜＞
          <br />チキンのトマト煮込み
          <br />ぶりの照り焼き
          <br />ごまだれ豚しゃぶ
          <br />＜副菜＞
          <br />温野菜
          <br />なすとパプリカのケチャップ炒め
          <br />ゆでブロッコリー
          <br />かぼちゃとさつまあげの煮物
          <br />ほうれん草とたまねぎのオープンオムレツ
          <br />ズッキーニとじゃがいものグラタン
        </p>
      </div>
      <div class="order-button">
        <router-link to="/order">
          <v-btn rounded color="orange lighten-1" class="text-h6">注文する</v-btn>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin: 10% auto 8%;
}
.text {
  margin: 4% auto 6%;
  padding-left: 10%;
}
h1 {
  font-family: "Kaushan Script", cursive;
}
h2 {
  margin-top: 6%;
  text-decoration: underline;
  text-decoration-color: yellow;
  text-align: center;
}
.wrapper1 {
  text-align: center;
  width: 100%;
  margin-top: 4%;
}
img {
  width: 90%;
}
.order-button {
  margin-bottom: 8%;
  text-align: center;
}
</style>