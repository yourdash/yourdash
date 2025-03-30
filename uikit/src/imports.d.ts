/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

// Declare common file imports as shared for the Typescript Language Server

declare module "*.module.css" {
  const content1: { [className: string]: string };
  export default content1;
}

declare module "*.module.scss" {
  const content2: { [className: string]: string };
  export default content2;
}

declare module "*.jpg" {
  const value3: string;
  export default value3;
}

declare module "*.png" {
  const value4: string;
  export default value4;
}

declare module "*.svg" {
  const value5: string;
  export default value5;
}

declare module "*.avif" {
  const value6: string;
  export default value6;
}

declare module "*.css" {
  const value6: string;
  export default value6;
}

declare module "*.scss" {
  const value7: string;
  export default value7;
}

declare module "*.json" {
  const content8: { [key: string]: string | number | object | boolean };
  export default content8;
}

declare module "*.obj" {
  const value9: string;
  export default value9;
}

declare module "*.glb" {
  const value0: string;
  export default value0;
}

declare module "*.gltf" {
  const value10: string;
  export default value10;
}

declare module "*.md" {
  const value11: string;
  export default value11;
}

declare module "*.mdx" {
  const value12: string;
  export default value12;
}

declare module "*.wasm" {
  const value13: string;
  export default value13;
}
