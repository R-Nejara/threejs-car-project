import * as THREE from "three";
import { renderer } from "./Renderer.js";
import { scene } from "./Scene.js";
import { camera, updateCamera } from "./Camera.js";
import { updateControls } from "../controls/OrbitControls.js";

// Render Loop
const runScene = () => {
  window.requestAnimationFrame(runScene);
  renderer.render(scene, camera);
  updateControls();
};

export { runScene };
