<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name" />
    <br />
    <br />
    <label for="coment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br />
    <br />
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前：{{ post.fields.name.stringValue}}</div>
      <div>コメント：{{ post.fields.comment.stringValue}}</div>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  created() {
    axios
      .get(
        "https://firestore.googleapis.com/v1/projects/プロジェクトID/databases/(default)/documents/comments"
      )
      .then(response => {
        this.posts = response.data.documents;
      });
  },
  methods: {
    createComment() {
      axios
        .post(
          "https://firestore.googleapis.com/v1/projects/プロジェクトID/databases/(default)/documents/comments",
          {
            fields: {
              name: {
                stringValue: this.name
              },
              comment: {
                stringValue: this.comment
              }
            }
          }
        )
        .catch(error => {
          console.log(error);
        });
      this.name = "";
      this.comment = "";
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
