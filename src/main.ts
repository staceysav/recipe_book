import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'



import App from './App.vue'
import router from './router'

//Добавить две строки для работы бутстрапа
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import './assets/main.css'

const pinia = createPinia()
pinia.use(piniaPersist)

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
