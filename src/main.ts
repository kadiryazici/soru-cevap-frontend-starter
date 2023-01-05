import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import relativeTimeFormat from 'dayjs/plugin/relativeTime'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

dayjs.extend(relativeTimeFormat)

const app = createApp(App)

app.use(createPinia())
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})
