import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../views/NotFound.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
// 各オブジェクトが異なるrouterを指す
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    props: true //ULRのパラメータを propとしてつねに渡す設定
  },
  // リダイレクト
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // 404 ページ表示 
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHashHistory(), // webr履歴を作成。前後に移動できるようにする
  routes
})

export default router
