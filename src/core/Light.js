import * as THREE from "three";

const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
const directionalLightPosition = new THREE.Vector3(10, 10, 0);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const lights = new THREE.Group();

directionalLight.position.copy(directionalLightPosition);
directionalLight.castShadow = true;
directionalLight.add(new THREE.AxesHelper(10));

lights.add(directionalLight, ambientLight);

export { lights, directionalLight };
