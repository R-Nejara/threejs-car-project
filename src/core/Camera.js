import * as THREE from "three";
// Initialize Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
  get aspect() {
    return this.width / this.height;
  },
};

// Initialize Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  2000
);

// Set Camera Position
camera.position.z = 5;

// Calculates New Width and Height
const updateSizes = () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
};
const recalculateViewport = () => {
  updateSizes();
  camera.aspect = sizes.width / sizes.height;
};

// Updates Projection Matrix And Recalculates Viewport
const updateCamera = () => {
  recalculateViewport();
  camera.updateProjectionMatrix();
};

export { camera, updateCamera };
