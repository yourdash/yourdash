/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import UKContainer from "@yourdash/uikit/src/components/container/UKContainer.js";
import UKHeading from "@yourdash/uikit/src/components/heading/UKHeading";
import UKSeparator from "@yourdash/uikit/src/components/separator/UKSeparator.js";
import { FC } from "react";
import AlbumMediaGrid from "../../albumMediaGrid/AlbumMediaGrid.js";

const IndexPage: FC = () => {
  return (
    <>
      <UKHeading text={"All Photos"} />
      {/* Albums */}
      <UKContainer>
        <div>Albums (TODO)</div>
      </UKContainer>
      <UKSeparator direction={"column"} />
      {/* Media */}
      <UKContainer>
        <AlbumMediaGrid />
      </UKContainer>
    </>
  );
};

export default IndexPage;
