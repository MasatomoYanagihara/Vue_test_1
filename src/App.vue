<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./LikeHeader"; // LikeHeaderコンポーネントをローカル登録する為にimportする。

export default {
  components: {
    /* 
    LikeHeaderコンポーネントをローカル登録。
    LikeHeader: LikeHeader;だがES6ではキーとバリューが同じなら省略して書ける。
    */
    LikeHeader
  }
};
</script>