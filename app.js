const app = Vue.createApp({
    // data, functions
    // template: '<h2>template</h2>' //template を埋め込む
    data() {
        return {
            url: "https://maku.blog/p/qcoz9ju/",
            showBooks: true,
            title: 'The book title is vue.',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'hoge', img: 'assets/1.jpg', isFav: true},
                {title: 'bafew', author: 'piyo' ,img: 'assets/2.jpg', isFav: false},
                {title: 'asdcccc', author: 'fuga', img: 'assets/1.jpg', isFav: true},
            ]
        }
    },
    methods: {
        changeTitle() {
            console.log('changeTitle func');
            this.title = 'title changed.'// this で dataの要素にアクセス
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        },
        handleEvent(e, arg) {
            console.log(e);
            console.log(e.type);
            console.log(arg);
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    },
    computed: {
        filterdBooks() {
            // books から isFavが false のものを除いて返却する
            return this.books.filter((book) => book.isFav) 
        },
    }
}
) //Vue appをつくる
app.mount("#app") //　id=app を持つ場所　domに埋め込む 

console.log("hello vue!!!!!!!!!!");
