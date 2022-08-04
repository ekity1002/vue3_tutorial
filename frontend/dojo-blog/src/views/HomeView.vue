<template>
  <div class="home">
    home
    <p ref="p">my name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click MEEEEEEEE!!</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name">

    <h2>ref</h2>
    <p> refprof name: {{ refprof.name}}, age: {{ refprof.age }}</p>
    <button @click="update1">update refprof</button>
    <h2>reactive</h2>
    <p> reactive name: {{ reactiveprof.name }} age: {{ reactiveprof.age}}</p>
    <button @click="update2"> update reactive prof</button>

    <!-- cimputed -->
    <h2>computed</h2>
    <input type="text" v-model="search">
    <p> search term {{ search }}</p>
    <div v-for="name in names" :key="name"> {{ name }} </div>

    <!-- watch -->
    <h1>watch</h1>
    <button @click="handleStopWatch">stop watching</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    console.log('setup')

    const name=ref('mario')
    const age=ref(30)

    const p = ref('null')
    console.log(p, p.value) // まだ template と紐付けられていないため null になる

    const refprof = ref({ name: "hoge", age: 50})
    const reactiveprof = reactive({ name: 'fuga', age: 22})
    const update1 = () => {
      refprof.value.age=100
    }
    const update2 = () => {
      reactiveprof.age = 99
    }

    const handleClick = () => {
      console.log('you clicked me...')
      console.log(p)
      // 通常のjavascript と同様に dom操作ができる
      // p.value.classList.add('test')
      // p.value.textContent = 'hello ninjas!!'

      name.value = 'luigi'
      age.value=20
    }

    // cimputed
    const search = ref('')
    const names = ref(['mario','luigi','hoge'])

    // const matchNames = computed(() => {
    //   // search で指定した文字が含まれる name の要素を飲みを返す関数
    //   // return names.value.filter((name) >= name.includes(search.value))
    //   return names.value.filter((name) => name.includes(search.value))
    //   }
    // )

    // watch
    const stopWatch = watch(search, () => {
      console.log('watch func run...')
    })

    const stopWatchEffect = watchEffect(() => {
      console.log('watch Effect...', search.value)
    })

    const handleStopWatch = () => {
      stopWatch()
      stopWatchEffect()
    }


    return {name, age, handleClick, p, refprof, reactiveprof, update1, update2,
     names, search, handleStopWatch}
  },
}
 
</script>
<style>
</style>