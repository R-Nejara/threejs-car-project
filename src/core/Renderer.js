import * as THREE from "three";
import { canvas } from "../Selectors.js";
import { sizes, updateSizes } from "../utils/helpers.js";
import { camera } from "./Camera.js";
import { scene } from "./Scene.js";

// Initialize Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

// Renderer Size
renderer.setSize(sizes.width, sizes.height);

// Set Pixelratio
renderer.setPixelRatio = Math.min(2, devicePixelRatio);

// Renderer Size Updater
const updateRenderer = () => {
  updateSizes();
  renderer.render(scene, camera);
  renderer.setSize(sizes.width, sizes.height);
};

export { renderer, updateRenderer };
