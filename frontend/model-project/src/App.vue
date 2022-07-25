<template>
  <h1>{{ title }}</h1>
  <p>Welcome,,,</p>
  <input type="text" ref="name">
  <button @click="handleClick">Check template Refs</button>
  <div v-if:="showModal">
    <Modal :header="header" :text="text" theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sing up now</a>
        <a href="#">more info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>
  <div v-if:="showModal2">
    <Modal :header="header" :text="text" theme="mymodal" @close="toggleModal2">
      <!-- links slotに挿入するテンプレート 記述順は関係なく子コンポーネントのslotの位置に挿入される -->
      <template v-slot:links>
        <a href="#">sing up now</a>
        <a href="#">more info</a>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
    </Modal>
  </div>
  <button @click="toggleModal">toggle modal</button>
  <button @click="toggleModal2"> toggle my modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue app!!',
      header: 'sign up for Giveaway',
      text: 'fuga',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    handleClick() {
      // htmlの要素に ref を指定すると、メソッド内で this.$refs.<指定名> でその要素にアクセスできる
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active') // 　おたんが押されたら $refs.name が指すdom(input) にクラスを追加
      this.$refs.name.focus() // フォーカスを当てる
    },
    toggleModal() {
      this.showModal = !this.showModal;
      this.text = 'fuga'
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
      this.text = 'MyModal'
    }
  }
}
</script>

<style>

/* グローバルに適応される */
/* scoped でこのファイルのみに制限可能 */
/* 全コンポーネント共通のスタイルは global.css に記述すると良い */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
}
</style>
