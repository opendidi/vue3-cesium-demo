<template>
  <div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as Cesium from 'cesium';
// defineProps<{}>()

onMounted(() => {
  let viewer = new Cesium.Viewer("cesiumContainer", {
    // 指定是否启用动画控件。默认值是true
    animation: false,
    // 指定是否启用时间轴控件。默认值是true
    timeline: false,
    // 指定是否启用全屏控件。默认值是true
    fullscreenButton: false,
    // 是否显示 3D/2D 选择器，右上角按钮
    sceneModePicker: false,
    // 是否显示 Home 按钮，右上角 home 按钮
    homeButton: false,
    // 指定场景模式。可以是3D、2D或Columbus View模式。默认值是Cesium.SceneMode.SCENE3D
    sceneMode: Cesium.SceneMode.SCENE2D,
  })

  // 设置初始位置
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(113.29, 22.81, 1000), // 经度，纬度，高度
    orientation: {
      heading: Cesium.Math.toRadians(0), // 方向
      pitch: Cesium.Math.toRadians(-15), // 倾斜角度
      roll: 0.0 // 翻滚角度
    }
  });
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
