<template>
  <div class="block" v-if="showBlock" @click="stopTimer">
    click me
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    }
  },
  mounted () {
    // マウントされた時呼ばれる
    console.log('mounted block.')
    // jsの組み込み関数
    // ミリ秒立つと実行する関数を指定できる。
    setTimeout(() => {
      this.showBlock = true;
      console.log('setTimeout')
      console.log(this.delay)

      this.startTimer();
    }, this.delay)
  },
  methods: {
    startTimer() {
      console.log('startTimer')
      // 第二引数で指定した時間おきに実行する関数を指定できる
      this.timer = setInterval(() => {
        this.reactionTime += 10
      }, 10);
    },
    stopTimer() {
      console.log('stopTImer')
      clearInterval(this.timer) // setInterval 実行をストップ. reactionTIme確定。
      console.log(this.reactionTime)
      this.$emit('end', this.reactionTime) // ゲーム終了イベント
    },
  },
  updated () {
    // コンポーネントの要素が更新される時どうする。
    // dataの値など
    console.log('updated.')
  },
  unmounted() {
    // コンポーネントがマウントから外される時に入る
    // vue router などを使用するときに使う
    console.log('unmounted')
  }
}
</script>

<style>
  .block {
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>