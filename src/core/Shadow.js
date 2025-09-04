import * as THREE from "three";

const rendererShadowSetup = (renderer) => {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
};

const directionalLightShadowSetup = (directionalLight) => {
  directionalLight.shadow.normalBias = 0.2;
};
export { rendererShadowSetup, directionalLightShadowSetup };
