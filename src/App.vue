<template>
  <div>
    <LikeHeader>
      <!-- 子へslotで送る。 -->
      <h1>トータルのいいね数</h1>
      <h2>{{ number }}</h2>
    </LikeHeader>

    <!-- 
      子コンポーネントのgoodNumberプロップスを指定して、dataのnumberをv-bindしている。 属性名はケバブケースgood-numberと書く。
    -->
    <LikeNumber :good-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader"; // LikeHeaderコンポーネントをローカル登録する為にimportする。

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    /* 
    LikeHeaderコンポーネントをローカル登録。
    LikeHeader: LikeHeader;をES6ではキーとバリューが同じなら省略して書いてもよい。
    */
    LikeHeader
  }
};
</script>