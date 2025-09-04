import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
const blenderObjects = (url) => {
  return new Promise((resolve, reject) => {
    loader.load(
      url,
      function (glb) {
        const objectGroup = glb.scene;
        resolve(objectGroup);
      },
      function (xhr) {}
    );
  });
};

export { blenderObjects };
