import { renderer } from "./Renderer.js";
import { scene } from "./Scene.js";
import { camera } from "./Camera.js";

// Render Loop
const runScene = () => {
  window.requestAnimationFrame(runScene);
  renderer.render(scene, camera);
};

export { runScene };
