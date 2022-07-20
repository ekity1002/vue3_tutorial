const app = Vue.createApp({
    // data, functions
    // template: '<h2>template</h2>' //template を埋め込む
    data() {
        return {
            showBooks: true,
            title: 'The book title is vue.',
            age: 45,
        }
    },
    methods: {
        changeTitle() {
            console.log('changeTitle func');
            this.title = 'title changed.'// this で dataの要素にアクセス
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
}
) //Vue appをつくる
app.mount("#app") //　id=app を持つ場所　domに埋め込む 

console.log("hello vue!!!!!!!!!!");
