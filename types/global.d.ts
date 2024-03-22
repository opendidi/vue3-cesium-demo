/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 10:44:10
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 10:44:37
 */
import type { VNode, VNodeChild, ComponentPublicInstance, FunctionalComponent, PropType as VuePropType } from 'vue';

declare global {
  declare type Recordable<T = any> = Record<string, T>;

  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_PORT: number;
    VITE_USE_MOCK: boolean;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
    VITE_GLOB_APP_TITLE: string;
    VITE_GLOB_APP_SHORT_NAME: string;
    VITE_USE_CDN: boolean;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
  }

}