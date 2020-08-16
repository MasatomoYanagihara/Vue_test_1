<template>
  <div>
    <Home></Home>

    <LikeHeader>
      <!-- 子へslotで送る。 -->
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>

    <!-- 
      子コンポーネントのgoodNumberプロップスを指定して、dataのnumberをv-bindしている。 
      属性名はケバブケースgood-numberと書く。
    -->
    <LikeNumber :good-number="number"></LikeNumber>

    <div>
      <h2>イベントのフォーム</h2>
      <label for="number">人数</label>
      <input id="number" type="number" v-model.number="eventData.peopleNumber" />
      <p>{{ eventData.peopleNumber }}</p>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import LikeHeader from "./components/LikeHeader"; // LikeHeaderコンポーネントをローカル登録する為にimportする。

export default {
  data() {
    return {
      number: 10,
      eventData: {
        peopleNumber: "タイトル"
      }
    };
  },
  components: {
    Home,
    /* 
    LikeHeaderコンポーネントをローカル登録。
    LikeHeader: LikeHeader;をES6ではキーとバリューが同じなら省略して書いてもよい。
    */
    LikeHeader
  }
};
</script>