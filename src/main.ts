/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 09:35:48
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 10:49:31
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')