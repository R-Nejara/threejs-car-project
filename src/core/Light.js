import * as THREE from "three";

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);

const lights = new THREE.Group();
lights.add(directionalLight, ambientLight);

export { lights, directionalLight };
