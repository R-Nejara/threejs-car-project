import * as THREE from "three";
import { camera } from "./Camera.js";
import { modelGroup } from "./Showcase.js";
import { lights } from "./Light.js";
// Initialize Scene
const scene = new THREE.Scene();
// Addings To Scene
scene.add(camera);
scene.add(modelGroup);
scene.add(lights);
export { scene };
