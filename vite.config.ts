/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 09:35:48
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 10:09:06
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'vue3-cesium-demo',
  plugins: [
    vue(),
    cesium(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // 这里的内容将会在每个 .scss 文件的开头自动注入
        additionalData: `$injectedColor: orange;`
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
