import * as THREE from "three";

const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.castShadow = true;
const directionalLightPosition = new THREE.Vector3(100, 10, 0);
directionalLight.position.copy(directionalLightPosition);
directionalLight.add(new THREE.AxesHelper(10));

const ambientLight = new THREE.AmbientLight(0xffffff, 1);

const lights = new THREE.Group();
lights.add(directionalLight, ambientLight);

export { lights, directionalLight };
