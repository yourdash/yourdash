/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import clippy from "@yourdash/shared/web/helpers/clippy";
import Button from "@yourdash/uikit/depChiplet/components/button/Button";
import Heading from "@yourdash/uikit/depChiplet/components/heading/Heading";
import Icon from "@yourdash/uikit/depChiplet/components/icon/Icon";
import { YourDashIcon } from "@yourdash/uikit/depChiplet/components/icon/iconDictionary";
import MajorButton from "@yourdash/uikit/depChiplet/components/majorButton/MajorButton";
import React, { useState } from "react";
import { CHATBOTS_STARTUP_MENU_PAGE, IStartupMenuPageProps } from "../../StartupMenu";
import styles from "./DefaultStartupMenuPage.module.scss";
import { useNavigate } from "react-router-dom";

const DefaultStartupMenuPage: React.FC<IStartupMenuPageProps> = ({ setMenuPage }) => {
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState<boolean>(false);
  const [chatbots, setChatbots] = useState<string[]>([]);
  const navigate = useNavigate();

  return (
    <main className={"animate__animated animate__fadeIn"}>
      <Icon
        className={clippy(styles.logo, "animate__animated animate__fadeInUp animate__duration_1000ms")}
        icon={YourDashIcon.YourDashLogo}
        preserveColor={true}
      />
      <Heading
        level={1}
        className={clippy(styles.heading, "animate__animated animate__fadeInDown animate__duration_1000ms")}
      >
        YourDash Chatbots
      </Heading>
      <p className={styles.tagline}>Create and manage customised chatbots for external chat services</p>
      <section className={styles.options}>
        <MajorButton
          onClick={() => {
            setMenuPage(CHATBOTS_STARTUP_MENU_PAGE.TUTORIAL);
          }}
        >
          Get Started
        </MajorButton>
        <Button
          onClick={() => {
            navigate("/app/a/chatbots/list-bots");
          }}
        >
          Skip Tutorial
        </Button>
      </section>
    </main>
  );
};

export default DefaultStartupMenuPage;
