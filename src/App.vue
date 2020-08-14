<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number }}</h2>
    <!-- goodNumberプロップスを指定して、dataのnumberをv-bindしている。 -->
    <LikeNumber :goodNumber="number"></LikeNumber> 
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