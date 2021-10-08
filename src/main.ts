import { createApp } from 'vue'

import quasarPlugin from './plugins/quasar'

import App from './App.vue'

const app = createApp(App)
app.use(quasarPlugin)
app.mount('#app')
