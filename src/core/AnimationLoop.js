import { updateCamera } from "./Camera.js";
import { updateControls } from "../controls/OrbitControls.js";
import { updateRenderer } from "./Renderer.js"

// Render Loop
const runScene = () => {
  window.requestAnimationFrame(runScene);
  updateCamera();
  updateControls();
  updateRenderer();
};

export { runScene };
