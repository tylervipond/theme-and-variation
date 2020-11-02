import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import './assets/tailwind.css'

const instance = createApp(App);
instance.use(router)
instance.use(store)
instance.mount('#app')
