/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { PhotosMediaType } from "./mediaType";

export default interface MediaGridMedia {
  type: PhotosMediaType;
  path: string;
  dimensions: {
    width: number;
    height: number;
  };
  contians?: {
    tags: string[];
    people: string[];
    landmarks: string[];
    objects: string[];
  };
  // epoch timestamp
  date: number;
  resource: string;
}
