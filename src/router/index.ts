/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 09:35:48
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 11:17:39
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import CesiumView from '../views/CesiumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/',
      name: 'cesium',
      component: CesiumView
    }
  ]
})

export default router
