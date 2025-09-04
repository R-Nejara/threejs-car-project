import * as THREE from "three";
import { getObjectGroup } from "../loaders/glbLoader";

const modelGroup = await getObjectGroup("/models/CarProject1.glb");
modelGroup.traverse((child) => {
  child.castShadow = true;
  child.receiveShadow = true;
});
console.log(modelGroup);

export { modelGroup };
