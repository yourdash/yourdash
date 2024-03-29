/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import useTranslate from "@yourdash/shared/web/helpers/i18n";
import Card from "@yourdash/uikit/depChiplet/components/card/Card";
import Icon from "@yourdash/uikit/depChiplet/components/icon/Icon";
import { YourDashIcon } from "@yourdash/uikit/depChiplet/components/icon/iconDictionary";
import IconButton from "@yourdash/uikit/depChiplet/components/iconButton/IconButton";
import RightClickMenu from "@yourdash/uikit/depChiplet/components/rightClickMenu/RightClickMenu";
import * as React from "react";
import csi from "@yourdash/csi/csi";
import path from "path-browserify";
import Preview from "./../views/preview/Preview";
import styles from "./ThumbnailsSmallLayout.module.scss";

const DetailsLayout: React.FC = () => {
  const [currentPath, setCurrentPath] = React.useState("/");
  const [files, setFiles] = React.useState<
    {
      name: string;
      type: "dir" | "file";
      icon: string;
    }[]
  >([]);
  const trans = useTranslate("files");

  React.useEffect(() => {
    // eslint-disable-next-line consistent-return
    csi.postJson("/app/files/get/thumbnails-small", { path: currentPath }, (resp) => {
      if (Object.keys(resp.files).length === 0) {
        return setFiles([]);
      }

      setFiles(resp?.files || []);
    });
  }, [currentPath]);

  return (
    <>
      <section className={"p-2 flex flex-col bg-container-bg top-0 sticky gap-2 shadow-lg z-10"}>
        <div className={"flex items-center gap-2"}>
          <IconButton
            disabled={currentPath === "/"}
            onClick={() => {
              setCurrentPath(path.join(currentPath, ".."));
            }}
            icon={YourDashIcon.ChevronLeft}
          />
          <span>{currentPath}</span>
        </div>
        {!path.extname(currentPath) && (
          <div
            className={clippy(
              "bg-container-bg pl-2 pr-2 text-left transition-colors [transition:var(--transition)] hover:[transition:var(--transition-fast)] flex items-center",
            )}
          >
            <Icon
              icon={YourDashIcon.Info}
              className={"h-[calc(100%-0.35rem)] mr-1.5"}
              color={"rgb(var(--container-fg))"}
            />
            <span className={"mr-auto"}>{trans("NAME")}</span>
            <span>{trans("TYPE")}</span>
          </div>
        )}
      </section>
      {path.extname(currentPath) ? (
        <Preview path={currentPath} />
      ) : (
        /* TODO: make columns adapt to screen width */
        <section className={styles.files}>
          {files.map((file) => (
            <RightClickMenu
              key={file.name}
              items={[
                {
                  label: "Delete",
                  onClick() {
                    return 0;
                  },
                },
                {
                  label: "Pin to sidebar",
                  onClick() {
                    return 0;
                  },
                },
              ]}
              className={styles.item}
            >
              <Card
                onClick={() => {
                  setCurrentPath(path.join(currentPath, file.name));
                }}
                className={styles.itemButton}
              >
                {file.icon === "" ? (
                  file.type === "dir" ? (
                    <Icon className={styles.itemIcon} icon={YourDashIcon.FileDirectory} />
                  ) : (
                    <Icon className={styles.itemIcon} icon={YourDashIcon.File} />
                  )
                ) : (
                  <img className={styles.itemIcon} alt={""} src={`${csi.getInstanceUrl()}${file.icon}`} />
                )}
                <span className={"pl-2 pr-2 text-ellipsis"}>{file.name}</span>
              </Card>
            </RightClickMenu>
          ))}
        </section>
      )}
    </>
  );
};

export default DetailsLayout;
