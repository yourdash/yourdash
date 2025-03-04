/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { Instance } from "./main.js";

interface IResource {
  // the path to the resource which will be served
  path: string;
  // array of all usernames that are allowed to view the resource
  allowedUsers: string[];
  // array of all group IDs that are allowed to view the resource
  allowedGroups: string[];
  // date the resource expires
  expires: number;
  // date the resource was created
  availableFrom: number;
  // the type of resource that this is
  type: "image" | "binary" | "text";
}

// TODO: use a database for this functionality instead of a map, this will allow non-volatile data retention and improved look-up speeds on instances with a large amount of resources in use (applications like photos use a lot of resources)

class ResourceManager {
  instance: Instance;
  // resource id to resource
  resources: Map<string, IResource>;

  constructor(instance: Instance) {
    this.instance = instance;
    this.resources = new Map();

    return this;
  }

  private generateResourceId(): string {
    return crypto.randomUUID();
  }

  async __internal_startup() {
    this.instance.request.get("/resource/:resourceId", async (req, res) => {
      const resourceId = (req.params as { resourceId: string }).resourceId;

      const resource = this.resources.get(resourceId);

      if (!resource) {
        res.status(404);
        return { error: "Resource not found" };
      }

      if (resource.expires < Date.now()) {
        res.status(410);
        return { error: "Resource expired" };
      }

      if (resource.type === "image") {
        return this.instance.requestManager.sendFile(res, resource.path, `image`);
      }
    });
  }

  // expiry date is in unix epoch
  // returns the resourceId
  addImage(path: string, options?: { allowedUsers?: string[]; allowedGroups?: string[]; expires?: number }): string {
    const resourceId = this.generateResourceId();
    const resource: IResource = {
      path: path,
      allowedGroups: [],
      allowedUsers: [],
      expires: options?.expires ?? Date.now() + 60 * 60 * 1000,
      availableFrom: Date.now(),
      type: "image",
    };
    this.resources.set(resourceId, resource);

    return resourceId;
  }
}

export default ResourceManager;
