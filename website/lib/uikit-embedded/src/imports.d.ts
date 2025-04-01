/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

// Declare common file imports as shared for the Typescript Language Server

declare module "*.module.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.avif" {
  const value: string;
  export default value;
}

declare module "*.css" {
  const value: string;
  export default value;
}

declare module "*.scss" {
  const value: string;
  export default value;
}

declare module "*.json" {
  const content: { [key: string]: string | number | object | boolean };
  export default content;
}

declare module "*.obj" {
  const value: string;
  export default value;
}

declare module "*.glb" {
  const value: string;
  export default value;
}

declare module "*.gltf" {
  const value: string;
  export default value;
}

declare module "*.md" {
  const value: string;
  export default value;
}

declare module "*.mdx" {
  const value: string;
  export default value;
}

declare module "*.wasm" {
  const value: string;
  export default value;
}
