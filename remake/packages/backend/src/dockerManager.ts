import { Instance } from "./instance.js";
import Dockerode from "dockerode";

export default class DockerManager {
    instance: Instance;
    docker;

    constructor(instance: Instance) {
        this.instance = instance;

        this.docker = new Dockerode()

        return this;
    }
}