import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

if (import.meta.env.PROD) {
  console.log = () => {}
  console.error = () => {}
  console.warn = () => {}
  console.info = () => {}
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
