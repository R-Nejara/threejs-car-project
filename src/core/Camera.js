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
const cameraPosition = new THREE.Vector3(0, 10, 10);

camera.position.copy(cameraPosition);

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
