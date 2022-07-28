import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // folder 名を指定すると自動で index.jsをインポートする

// routerを use で使用
createApp(App).use(router).mount('#app')
