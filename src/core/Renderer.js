import * as THREE from "three";
import { canvas } from "../Selectors.js";
// Initialize Renderer
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });

// Renderer Size
renderer.setSize(window.innerWidth, window.innerHeight);

// Set Pixelratio
renderer.setPixelRatio = Math.min(2, devicePixelRatio);

export { renderer };
