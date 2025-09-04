import * as THREE from "three";
import { renderer } from "./Renderer";
import { PCFSoftShadowMap } from "three/src/constants.js";

const rendererShadowSetup = (renderer) => {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
};
export { rendererShadowSetup };
