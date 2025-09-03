import * as THREE from "three";
// Test Object
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

export { cubeMesh };
