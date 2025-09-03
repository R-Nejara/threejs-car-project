import * as THREE from "three";
import { sizes, updateSizes } from "../utils/helpers";

// Initialize Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  2000
);

// Set Camera Position
camera.position.z = 5;

const recalculateViewport = () => {
  updateSizes();
  camera.aspect = sizes.aspect;
};

// Updates Projection Matrix And Recalculates Viewport
const updateCamera = () => {
  recalculateViewport();
  camera.updateProjectionMatrix();
};

export { camera, updateCamera };
