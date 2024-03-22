/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: htang
 * @Date: 2024-03-22 09:35:48
 * @LastEditors: htang
 * @LastEditTime: 2024-03-22 11:10:11
 */
import * as Cesium from 'cesium';

class Controller {
  viewer: any
  constructor() {
    this.init_data()
  }
  init_data() {
    this.viewer = null
  }
  init(BaseMapConfig: any) {
    const mapID = 'cesiumContainer'
    let vConfig = {
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
      infoBox: false,
    }
    // 后台接口配置 融合替换 默认配置
    vConfig = Object.assign(vConfig, BaseMapConfig)
    const viewer = new Cesium.Viewer(mapID, vConfig);
    // 消除锯齿
    this.removeJagged(viewer);
    this.viewer = viewer;
    return viewer
  }
  setView(viewer: any, { lon, lat, height }) {
    // 设置初始位置
    viewer.camera.setView({
      // 经度，纬度，高度
      destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
      orientation: {
        heading: Cesium.Math.toRadians(0), // 方向
        pitch: Cesium.Math.toRadians(-15), // 倾斜角度
        roll: 0.0 // 翻滚角度
      }
    });
  }
  // 消除锯齿
  removeJagged(viewer: any) {
    viewer.scene.postProcessStages.fxaa.enabled = false
    viewer.scene.fxaa = false
    const supportsImageRenderingPixelated =
      viewer.cesiumWidget._supportsImageRenderingPixelated
    if (supportsImageRenderingPixelated) {
      let vtxf_dpr = window.devicePixelRatio
      while (vtxf_dpr >= 2.0) {
        vtxf_dpr /= 2.0
      }
      viewer.resolutionScale = vtxf_dpr
    }
  }
}

export const GController = new Controller()