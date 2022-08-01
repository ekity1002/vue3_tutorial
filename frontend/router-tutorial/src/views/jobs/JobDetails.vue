<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <h1>{{ job.details }}</h1>
    <!-- <p>Job Id is {{ $route.params.id }}</p> -->
    <p>Job Id is {{ id }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'], // routing の設定で prop = true にすると prop にクエリを渡せる
  data() {
    return {
      job: null,
      // id: this.$route.params.id
    }
  },
  mounted() {
      fetch("http://localhost:3000/jobs/" + this.id)
      .then(res => res.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
      console.log('mouted')
      console.log(this.job)
  }
}
</script>

<style>

</style>