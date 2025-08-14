import path from "node:path";
import fs from "node:fs";
import { type PluginOption } from "vite";

const appsDirectoryPath = path.join(process.cwd(), "../../apps");

export default [
  function applicationsSettingsPages(): PluginOption {
    const virtualModuleId =
      "virtual:uk.ewsgit.settings/external-applications/file";
    // do not follow convention as it makes the virtual file invisible to the ReactJS plugin, leading to .tsx not being recognized as legitimate
    const resolvedVirtualModuleId = /*'\0' + */ virtualModuleId;
    const resolvedVirtualModuleIdWithExtension =
      resolvedVirtualModuleId + ".tsx";

    return {
      name: "uk.ewsgit.settings/external-applications",
      resolveId(id) {
        if (id === virtualModuleId) {
          return resolvedVirtualModuleIdWithExtension;
        }
        return null; // Add return null for non-matching IDs
      },
      load(id: string) {
        if (id === resolvedVirtualModuleIdWithExtension) {
          let fileTemplate = `/* This is a virtual file */
import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

/* loadable_components_placeholder */
const ApplicationsRouter = [/* route_elements_placeholder */]
const applicationIds = [/* application_ids_placeholder */]

export { applicationIds };
export default ApplicationsRouter;
`;
          let loadableRegionReplacement = "";
          let routeRegionReplacement = "";
          // Determine apps directory path based on environment variable

          let allApps: string[] = [];
          try {
            // Synchronously read the directory content
            allApps = fs.readdirSync(appsDirectoryPath).filter((entry) => {
              // Optional: Add filtering to ensure it's a directory or meets criteria
              const entryPath = path.join(
                appsDirectoryPath,
                entry,
                "./hooks/uk.ewsgit.settings/web/",
              );
              try {
                // Check if it's a directory and potentially if the web/src/index.tsx exists
                return fs
                  .statSync(entryPath, { throwIfNoEntry: false })
                  .isDirectory();
              } catch (statError) {
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
                  "/* Error reading apps directory */",
                )
                .replace(
                  "/* route_elements_placeholder */",
                  "/* Error reading apps directory */",
                )
                .replace(
                  "/* application_ids_placeholder */",
                  `/* Error reading apps directory */`,
                ),
              map: null,
            };
          }

          for (let i = 0; i < allApps.length; i++) {
            const appName = allApps[i];

            const appImportPath = path
              .join(
                path.resolve(appsDirectoryPath, appName),
                "./hooks/uk.ewsgit.settings/web/index.tsx",
              )
              .replaceAll(path.sep, path.posix.sep);

            loadableRegionReplacement += `const Application${i} = loadable(() => import(/* webpackChunkName: "${appName}" */ "${appImportPath}"), {
            fallback: <div>Loading settings for ${appName}...</div>
          });`;

            routeRegionReplacement += `<Route key="${appName}" path="${appName}/*" element={<Application${i} />} />,`;
          }

          fileTemplate = fileTemplate.replace(
            "/* loadable_components_placeholder */",
            loadableRegionReplacement.trim(),
          );
          fileTemplate = fileTemplate.replace(
            "/* route_elements_placeholder */",
            routeRegionReplacement.trim(),
          );
          fileTemplate = fileTemplate.replace(
            "/* application_ids_placeholder */",
            `"${allApps.join('",')}"`,
          );

          return { code: fileTemplate, map: null, moduleType: "tsx" };
        }
        return null;
      },
    };
  },
];
