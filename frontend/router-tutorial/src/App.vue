<template>
  <nav>
    <!-- router-link タグを使うことで vuew が URL をクリクしたときに router を起動できる -->
    <router-link to="/">Home</router-link> |
    <!-- bindを使用することで、コンポーネントの name に指定した名前の router をリンクできる -->
    <!-- url が変わっても同じコンポーネントを配置できるメリットが有る -->
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
  </nav>
  <button @click="redirect"> Redirect </button>
  <button @click="back"> Go back </button>
  <button @click="forward"> GO forward </button>
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    },
    back() {
      console.log('back')
      // this.$route と勘違いしないこと！！！
      this.$router.go(-1) //一つ前のページに戻る
    },
    forward() {
      this.$router.go(1) //一つあとのページに行く
    },
  },
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

/* アクセスされた router に付与されるクラス */
nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
