/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 09:35:48
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 10:46:06
 */
import { fileURLToPath, URL } from 'node:url'

import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium'
import { wrapperEnv } from './build/utils';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {

  const isBuild = command === 'build';

  const root = process.cwd();

  const env = loadEnv(mode, root);

  const viteEnv = wrapperEnv(env);

  const { VITE_PUBLIC_PATH } = viteEnv;

  return {
    base: VITE_PUBLIC_PATH,
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
    esbuild: {
      //清除全局的console.log和debug
      drop: isBuild ? ['console', 'debugger'] : [],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
}
