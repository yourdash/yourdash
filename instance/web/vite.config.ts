/*
 * Copyright ©2025 Ewsgit<https://ewsgit.uk> and YourDash<https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import react from "@vitejs/plugin-react";
import { defineConfig, type PluginOption } from "vite";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "node:path";
import * as fs from "node:fs";
// enable for https testing. import mkcert from "vite-plugin-mkcert"

const appsDirectoryPath =
  process.env.VITE_IS_DOCKER === "true"
    ? "/web/src/app/apps/"
    : path.resolve(__dirname, "../../apps/"); // Use path.resolve for relative paths

function applicationRouter(): PluginOption {
  const virtualModuleId = "virtual:application-router/file";
  // do not follow convention as it makes the virtual file invisible to the ReactJS plugin, leading to .tsx not being recognized as legitimate
  const resolvedVirtualModuleId = /*'\0' + */ virtualModuleId;
  const resolvedVirtualModuleIdWithExtension = resolvedVirtualModuleId + ".tsx";

  return {
    name: "yourdash-application-router-generator", // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleIdWithExtension;
      }
      return null; // Add return null for non-matching IDs
    },
    load(id: string) {
      if (id === resolvedVirtualModuleIdWithExtension) {
        // Define the template using JSX structure
        let fileTemplate = `/* This is a virtual file */
import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

/* loadable_components_placeholder */
const AppRouter = [{/* route_elements_placeholder */}]


export default AppRouter;
`;

        let loadableRegionReplacement = "";
        let routeRegionReplacement = "";
        // Determine apps directory path based on environment variable

        let allApps: string[] = [];
        try {
          // Synchronously read the directory content
          allApps = fs.readdirSync(appsDirectoryPath).filter((entry) => {
            // Optional: Add filtering to ensure it's a directory or meets criteria
            const entryPath = path.join(appsDirectoryPath, entry);
            try {
              // Check if it's a directory and potentially if the web/src/index.tsx exists
              return fs.statSync(entryPath).isDirectory();
            } catch (statError) {
              console.warn(
                `[applicationRouter] Could not stat entry: ${entryPath}`,
                statError,
              );
              return false;
            }
          });
        } catch (err) {
          console.error(
            `[applicationRouter] Error reading apps directory: ${appsDirectoryPath}`,
            err,
          );
          // Return an empty router template or throw error depending on desired behavior
          return {
            code: fileTemplate
              .replace(
                "/* loadable_components_placeholder */",
                "// Error reading apps directory",
              )
              .replace(
                "{/* route_elements_placeholder */}",
                "{/* Error reading apps directory */}",
              ),
            map: null,
          };
        }

        for (let i = 0; i < allApps.length; i++) {
          const appName = allApps[i];

          const appImportPath = path
            .join(
              path.resolve(appsDirectoryPath, appName),
              "./web/src/index.tsx",
            )
            .replaceAll(path.sep, path.posix.sep);

          loadableRegionReplacement += `const Application${i} = loadable(() => import(/* webpackChunkName: "${appName}" */ "${appImportPath}"), {
  fallback: <div>Loading ${appName}...</div>
});`;

          routeRegionReplacement += `<Route key="${appName}" path="${appName}/*" element={<Application${i} />} />,`;
        }

        fileTemplate = fileTemplate.replace(
          "/* loadable_components_placeholder */",
          loadableRegionReplacement,
        );
        fileTemplate = fileTemplate.replace(
          "{/* route_elements_placeholder */}",
          routeRegionReplacement.trimEnd(),
        );

        return { code: fileTemplate, map: null, moduleType: "tsx" };
      }
      return null;
    },
  };
}

let plugins = [];

for (const app of fs.readdirSync(appsDirectoryPath)) {
  const pluginPath = path.join(appsDirectoryPath, app, "/web/vite.plugin.ts");

  if (!fs.existsSync(pluginPath)) continue;

  plugins.push(...(await import(pluginPath)).default);
}

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
    applicationRouter(),
    ...plugins.map((p) => p()),
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
