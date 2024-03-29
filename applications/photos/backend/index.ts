/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import coreApi from "@yourdash/backend/src/core/coreApi.js";
import BackendModule, { YourDashModuleArguments } from "@yourdash/backend/src/core/moduleManager/backendModule.js";
import pth from "path";
import * as path from "path";
import Photo from "./photo.js";
import PhotoAlbum from "./photoAlbum.js";

export default class PhotosModule extends BackendModule {
  rootPath: string = "/app/photos";

  constructor(args: YourDashModuleArguments) {
    super(args);

    this.API.request.get(`${this.rootPath}/albums`, async (req, res) => {
      const { username } = req.headers as { username: string };

      const userFsPath = coreApi.users.get(username).getFsPath();
      const album = new PhotoAlbum(username, path.join(userFsPath, "Photos"));

      return res.json(await album.getSubAlbumsPaths());
    });

    this.API.request.get(`${this.rootPath}/album/*`, async (req, res) => {
      const albumPath = req.params["0"] as string;
      const { username } = req.headers as { username: string };
      const album = new PhotoAlbum(username, albumPath);

      return res.json(await album.getIPhotoAlbum());
    });

    this.API.request.get(`${this.rootPath}/grid-photo/*`, async (req, res) => {
      const photoPath = req.params["0"] as string;
      const { username } = req.headers as { username: string };

      const photo = new Photo(username, photoPath);

      return res.json(await photo.getIGridPhoto());
    });

    this.API.request.get(`${this.rootPath}/photo/*`, async (req, res) => {
      const photoPath = req.params["0"] as string;
      const { username } = req.headers as { username: string };

      const photo = new Photo(username, photoPath);

      return res.json(await photo.getIPhoto());
    });

    this.API.request.get(`${this.rootPath}/download-photo/*`, async (req, res) => {
      const photoPath = req.params["0"] as string;
      const { username } = req.headers as { username: string };

      const photo = new Photo(username, photoPath);

      res.setHeader("Content-Disposition", `attachment; filename="${pth.basename(photoPath)}"`);

      return res.json(await photo.getIPhoto());
    });

    // this.API.request.get("/app/photos/photo/*", async (req, res) => {
    //   const reqPath = req.params["0"] as string;
    //   const { username } = req.headers as { username: string };
    //
    //   const userFsPath = coreApi.users.get(username).getFsPath();
    //   const file = await coreApi.fs.get(path.join(userFsPath, "Photos", reqPath));
    //
    //   if (!(await file?.doesExist()) || file === null) {
    //     console.log(path.join(userFsPath, "Photos", reqPath));
    //     console.log("Unknown dir");
    //     return res.json({ error: true });
    //   }
    //
    //   if (file.entityType === "directory") {
    //     return res.json({
    //       error: true,
    //     });
    //   }
    //
    //   if (file.getType() !== "image") {
    //     return res.json({ error: true });
    //   }
    //
    //   const imSize = imageSize(file.path);
    //
    //   return res.json({
    //     fileName: file.getName(),
    //     date: new Date((await file.getMetadata()).birthtime).toString(),
    //     dimensions: {
    //       width: imSize.width,
    //       height: imSize.height,
    //     },
    //     url: this.API.core.authenticatedImage.create(username, AUTHENTICATED_IMAGE_TYPE.FILE, file.path),
    //   } as IPhoto);
    // });
    //
    // this.API.request.get("/app/photos/categories", async (req, res) => {
    //   const { username } = req.headers as { username: string };
    //
    //   const userFsPath = coreApi.users.get(username).getFsPath();
    //   const photosDirectory = await coreApi.fs.getDirectory(path.join(userFsPath, "Photos"));
    //
    //   if (!(await photosDirectory?.doesExist()) || photosDirectory === null) {
    //     return res.json([]);
    //   }
    //
    //   const photosDirectoryChildren = await photosDirectory.getChildren();
    //   const categories = (
    //     await Promise.all(
    //       photosDirectoryChildren.map(async (fsEntityPath) => {
    //         const fsEntity = await photosDirectory.getChild(fsEntityPath);
    //         if (fsEntity.entityType === "directory") {
    //           return fsEntity.getName();
    //         }
    //
    //         return "";
    //       }),
    //     )
    //   ).filter((x) => x !== "");
    //
    //   return res.json(categories);
    // });
    //
    // this.API.request.get("/app/photos/category/:categoryPath", async (req, res) => {
    //   const { categoryPath } = req.params;
    //   const { username } = req.headers as { username: string };
    //
    //   const userFsPath = coreApi.users.get(username).getFsPath();
    //   const photosDirectory = await coreApi.fs.getDirectory(path.join(userFsPath, "Photos"));
    //
    //   if (await (await photosDirectory.getChild(categoryPath)).doesExist()) {
    //     const categoryFsEntity = await photosDirectory.getChild(categoryPath);
    //
    //     if (!(await categoryFsEntity.doesExist()) || categoryFsEntity.entityType !== "directory") {
    //       return res.json([]);
    //     }
    //
    //     return res.json((await categoryFsEntity.getChildren()).map((c) => path.join(categoryPath, c)));
    //   }
    // });
  }
}
