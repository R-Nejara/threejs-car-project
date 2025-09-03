import { Scene } from "three";
import { camera } from "./Camera.js";
// Initialize Scene
const scene = new Scene();

// Addings To Scene
camera.add(scene);

export { scene };
