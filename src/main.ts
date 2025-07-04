import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Configuration spécifique pour mobile
if (typeof (window as any).Capacitor !== 'undefined' && (window as any).Capacitor.isNativePlatform?.()) {
  document.addEventListener('deviceready', (): void => {
    app.mount('#app')
  })
} else {
  app.mount('#app')
}
