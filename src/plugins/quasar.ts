import type { App } from 'vue'

import { Quasar, Notify } from 'quasar'

import 'quasar/dist/quasar.prod.css'

export default {
  install(app: App) {
    app.use(Quasar, {
      config: {
        brand: {
          primary: '#203b46',
          secondary: '#1b9688',
          tertiary: '#f4d35e'
        }
      },
      plugins: {
        Notify
      }
    })
  }
}
