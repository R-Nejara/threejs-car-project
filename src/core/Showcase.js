import * as THREE from "three";
import { getObjectGroup } from "../loaders/glbLoader";

const modelGroup = await getObjectGroup("/models/Golf5.glb");
modelGroup.traverse((child) => {
  child.castShadow = true;
  child.receiveShadow = true;
});

export { modelGroup };
