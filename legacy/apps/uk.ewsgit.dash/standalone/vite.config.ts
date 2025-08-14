/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
// ViteJS docs: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    // @ts-ignore
    dynamicImport(),
  ],
  appType: "spa",
  root: "./",
  base: "./",
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    minify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
