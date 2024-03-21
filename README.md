```html
在 Vite 中配置 SCSS 支持相对简单，因为 Vite 使用了 PostCSS 和相关的预处理器插件来处理样式文件。下面是如何在 Vite 项目中配置 SCSS 支持的步骤：

安装依赖：首先，你需要安装 sass（Dart Sass 的 JavaScript 版本）作为项目依赖。
npm install sass --save-dev
# 或者使用 yarn
yarn add sass --dev
配置 Vite：在 Vite 中，默认情况下，你不需要做任何特殊配置来启用 SCSS 支持。一旦你安装了 sass 依赖，Vite 就能够处理 .scss 或 .sass 文件了。
如果你需要进行一些自定义配置，如定义全局的 SCSS 变量或混入（mixins），你可以在 vite.config.js（或 vite.config.ts）文件中这样做：

// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 这里的内容将会在每个 .scss 文件的开头自动注入
        additionalData: `$injectedColor: orange;`
      },
    },
  },
});
在上面的例子中，$injectedColor 变量将会被注入到每个 SCSS 文件的开始部分，这样你就可以在项目的任何 SCSS 文件中使用它而不需要重复定义。

使用 SCSS：现在你可以在你的 Vue 组件中直接使用 SCSS 了：
<template>
  <div class="example">Hello World</div>
</template>

<script>
export default {
  name: 'ExampleComponent'
};
</script>

<style lang="scss">
$baseColor: #333;
.example {
  color: $baseColor;
  background-color: $injectedColor;
}
</style>
在上面的例子中，.example 类将会使用在 vite.config.js 中注入的 $injectedColor 变量，以及在组件的 <style> 标签中定义的 $baseColor 变量。

运行 Vite：现在，当你运行 Vite 开发服务器时，它会自动处理你的 SCSS 文件。
npm run dev
# 或者使用 yarn
yarn dev
这些步骤应该足以让你在 Vite 项目中开始使用 SCSS。如果你遇到任何问题，确保你的 Vite 和依赖都更新到了最新版本，并且检查 Vite 的文档中关于 CSS 预处理器的部分。
```


## 参考：https://blog.csdn.net/weixin_44857463/article/details/129273593?csdn_share_tail=%7B%22type%22%3A%22blog%22%2C%22rType%22%3A%22article%22%2C%22rId%22%3A%22129273593%22%2C%22source%22%3A%22weixin_44857463%22%7D