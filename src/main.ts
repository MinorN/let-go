import { createApp } from 'vue'
import '@/assets/style/reset.scss'
import '@/assets/style/vars.scss'
import App from './App.vue'
import { router } from './router/index'

const app = createApp(App)

app.use(router)
app.mount('#app')
