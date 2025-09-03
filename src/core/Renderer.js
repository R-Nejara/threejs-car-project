import { canvas } from "../Selectors.js";
import { WebGLRenderer } from "three/src/Three.js";
// Initialize Renderer
const renderer = new WebGLRenderer({ canvas: canvas, antialias: true });

// Initial render
renderer.setSize(window.innerWidth, window.innerHeight);

// Set Pixelratio
renderer.setPixelRatio = Math.min(2, devicePixelRatio);

export { renderer };
