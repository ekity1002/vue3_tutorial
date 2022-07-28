<template>
  <h1>Job Details Page</h1>
  <!-- <p>Job Id is {{ $route.params.id }}</p> -->
  <p>Job Id is {{ id }}</p>
</template>

<script>
export default {
  props: ['id'], // routing の設定で prop = true にすると prop にクエリを渡せる
  // data() {
  //   return {
  //     id: this.$route.params.id
  //   }
  // }
}
</script>

<style>

</style>