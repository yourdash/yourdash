/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";
import dynamicImport from "vite-plugin-dynamic-import";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from "path";

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
    libInjectCss(),
    dtsPlugin({
      rollupTypes: true,
    }),
  ],
  server: {
    port: 3002,
  },
  publicDir: "lib/theme",
  build: {
    outDir: "./dist",
    lib: {
      name: "uikit",
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      fileName: (format, fileName) => {
        const extension = format === "cjs" ? "js" : "mjs";
        return `${fileName}.${extension}`;
      },
    },
    copyPublicDir: true,
    emptyOutDir: true,
    minify: true,
    rollupOptions: {
      external: [
        "react",
        "react/jsx-runtime",
        "react-router",
        "react-router-dom",
      ],
      jsx: "react-jsx",
      treeshake: false,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
      },
    },
  },
});
