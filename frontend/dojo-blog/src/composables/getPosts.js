import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    // async
    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts') // fetch が終わるまで待機する
        console.log('async', data)
        if (!data.ok) { //response が成功しているか
          throw Error('No data available.')
        }
        posts.value = await data.json() // fetch の response は非同期なので await しないとだめ。
      }
      catch (err) {
        error.value = err.message
        console.log(err.message)
      }
    }
    return { posts, error, load}
}

export default getPosts