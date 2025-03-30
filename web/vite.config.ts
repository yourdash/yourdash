/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
// enable for https testing. import mkcert from "vite-plugin-mkcert"

// ViteJS docs: https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-ignore
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", {}]],
      },
    }),
    // @ts-ignore
    dynamicImport(),
    // enable for https tests. mkcert()
  ],
  appType: "spa",
  root: "./",
  base: "./",
  build: {
    rollupOptions: {
      external: ["chart.js"],
    },
    sourcemap: true,
    minify: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
