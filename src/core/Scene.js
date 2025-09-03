import * as THREE from "three";
import { camera } from "./Camera.js";
import { cubeMesh } from "./Car.js";
// Initialize Scene
const scene = new THREE.Scene();

// Addings To Scene
scene.add(camera);
scene.add(cubeMesh);

export { scene };
