import * as THREE from "three";
import { getObjectGroup } from "../loaders/glbLoader";

const modelGroup = await getObjectGroup("/models/CarProject1.glb");

export { modelGroup };
