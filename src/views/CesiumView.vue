<!--
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 09:35:48
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 11:09:23
-->
<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { GController } from '@/utils/ctrlCesium/Controller'
// defineProps<{}>()

onMounted(() => {
  let viewer = GController.init({})
  GController.setView(viewer, { lon: 113.29, lat: 22.81, height: 5000})
})

</script>

<style lang="scss" scoped>
#cesiumContainer {
  width: 100%;
  height: 100vh;

  :deep(.cesium-viewer-bottom) {
    display: none;
  }
}
</style>
