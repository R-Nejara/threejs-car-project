import { updateCamera } from "../core/Camera";
import { updateRenderer } from "../core/Renderer";
window.addEventListener("resize", () => {
  updateCamera();
  updateRenderer();
  console.log("resize");
});
