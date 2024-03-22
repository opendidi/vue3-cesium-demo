<!--
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 15:17:22
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 15:32:33
-->
<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { GController } from "../utils/ctrlCesium/Controller";
import * as Cesium from "cesium";
// defineProps<{}>()

onMounted(() => {
  let viewer = GController.init({});
  GController.setView(viewer, { lon: 113.29, lat: 22.81, height: 5000 });
});
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
