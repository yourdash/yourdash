/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

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
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
    },
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "react-router", "react-router-dom"],
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: ["src/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
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
