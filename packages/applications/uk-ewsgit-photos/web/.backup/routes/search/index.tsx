/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import tun from "@yourdash/tunnel/src/index.js";
import useResource from "@yourdash/tunnel/src/useResource.js";
import UKTextInput from "@yourdash/uikit/src/components/textInput/UKTextInput.js";
import { UKIcons } from "@yourdash/uikit/src/core/iconDictionary.js";
import React, { FC } from "react";
import { z } from "zod";
import AlbumMediaGrid from "../../components/AlbumMediaGrid/AlbumMediaGrid";
import SubAlbums from "../../components/SubAlbums/SubAlbums";
import SearchPageResults from "./components/results.js";
import styles from "./index.module.scss";

const SearchIndexPage: FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const searchResults = useResource(
    () =>
      tun.get(
        `/uk-ewsgit-photos/media/search/${query}`,
        "json",
        z
          .object({
            fileName: z.string(),
            timestamp: z.string(),
            path: z.string(),
          })
          .array(),
      ),
    {
      dependencies: [query],
      return: "data",
    },
  );

  return (
    <div className={styles.page}>
      <UKTextInput
        className={styles.searchBar}
        accessibleName={"Search Media"}
        getValue={setQuery}
        placeholder={"Search Media..."}
        icon={UKIcons.Search}
      />
      {searchResults && <SearchPageResults results={searchResults} />}
      <SubAlbums
        scrollerClassName={styles.subAlbums}
        path={"/photos"}
      />
      <AlbumMediaGrid
        scrollerClassName={styles.subAlbums}
        path={"/photos"}
      />
    </div>
  );
};

export default SearchIndexPage;
