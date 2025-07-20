import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// 導入頁面組件
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Menu from './pages/Menu.vue'
import Contact from './pages/Contact.vue'

// 定義路由
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/menu', component: Menu },
  { path: '/contact', component: Contact }
]

// 建立路由器，⚠️ 使用 base URL 讓 GitHub Pages 能正確顯示子路徑
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// 建立並掛載應用程式
createApp(App)
  .use(router)
  .mount('#app')
