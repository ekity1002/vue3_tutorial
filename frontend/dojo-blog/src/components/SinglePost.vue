<template>
  <div class="post">
    <!-- routing: URL の param に post.id を渡す。-->
    <router-link :to="{name: 'Details', params: {id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from "vue"

export default {
  props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '....' //最初の１００文字を返す
    })

    return { snippet }
  }

}
</script>

<style>

</style>