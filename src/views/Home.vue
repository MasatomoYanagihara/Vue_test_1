<template>
  <div>
    <div class="top-img">
      <img src="@/assets/cookingmama.png" />
    </div>

    <div class="section1">
      <h2>
        シェフが作る家庭料理
        <br />デリバリーサービス。
      </h2>
      <h3>
        プロの料理人が作った家庭料理を、
        <br />お届けします。
        <br />通常の料理代行ではご自宅に派遣
        <br />された業者のスタッフが調理を行う
        <br />ことが多いですが、そもそも家に
        <br />入られたくないというご意見があ
        <br />りました。
        そこで我々はお客様の
        <br />近郊に位置するレストランのシェフ
        <br />が家庭料理を作り、お届けする形
        <br />を採用します。
        <br />忙しい子育てママから料理を作る
        <br />負担を軽減します。
      </h3>
    </div>

    <div class="section2">
      <div class="wrapper1">
        <img src="@/assets/tukuoki.jpg" />
      </div>
      <h2>
        健康に配慮した
        <br />週替わりのメニュー
      </h2>

      <h3>
        フードデリバリーはファースト
        <br />フードや味付けの濃い料理が多く、
        <br />毎日食べるには適していないと
        <br />考えます。
        そこで我々は健康にも
        <br />配慮したバランスの良いメニューを
        <br />担当シェフが考案します。
        <br />また週代わりでメニューを更新する
        <br />ことで、マンネリ化しがちな
        <br />献立問題についても解決します。
      </h3>
    </div>

    <div class="section3">
      <div class="wrapper1">
        <img src="@/assets/food2.jpg" />
      </div>
      <h2>リーズナブルな価格</h2>

      <h3>
        フードデリバリーはファースト
        <br />フードや味付けの濃い料理が多く、
        <br />毎日食べるには適していないと
        <br />考えます。
        そこで我々は健康にも
        <br />配慮したバランスの良いメニューを
        <br />担当シェフが考案します。
        <br />また週代わりでメニューを更新する
        <br />ことで、マンネリ化しがちな
        <br />献立問題についても解決します。
      </h3>
    </div>

    <router-link to="/shop">
      <div class="serch-button">
        <v-btn rounded color="orange lighten-1" class="text-h6">お店を探す</v-btn>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped lang="scss">
img {
  width: 100%;
  max-width: 1100px;
}
.top-img {
  text-align: center;
}
.section1 {
  padding-bottom: 14%;
  border-bottom: 1px solid rgb(200, 200, 200);

  h2 {
    margin: 0 auto;
    margin-top: 10%;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: yellow;
  }
  h3 {
    margin-top: 6%;
    margin-left: 12%;
    font-weight: normal;
  }
}
.section2 {
  margin-top: 16%;
  padding-bottom: 14%;
  border-bottom: 1px solid rgb(200, 200, 200);

  .wrapper1 {
    width: 90%;
    margin: 0 auto;
  }
  h2 {
    margin-top: 8%;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: yellow;
  }
  h3 {
    margin-top: 6%;
    margin-left: 12%;
    font-weight: normal;
  }
}

.section3 {
  margin-top: 16%;

  .wrapper1 {
    width: 90%;
    margin: 0 auto;
  }
  h2 {
    margin-top: 10%;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: yellow;
  }
  h3 {
    margin-top: 4%;
    margin-left: 12%;
    font-weight: normal;
  }
}

.serch-button {
  margin-top: 10%;
  margin-bottom: 12%;
  text-align: center;
}
</style>