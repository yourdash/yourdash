/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import coreCSI from "@yourdash/csi/coreCSI.ts";
import EndpointResponseLoginInstanceMetadata from "@yourdash/shared/endpoints/login/instance/metadata.ts";
import clippy from "@yourdash/shared/web/helpers/clippy.ts";
import Button from "@yourdash/uikit/components/button/button.tsx";
import Card from "@yourdash/uikit/components/card/card.tsx";
import Flex from "@yourdash/uikit/components/flex/flex.tsx";
import Heading from "@yourdash/uikit/components/heading/heading.tsx";
import Image from "@yourdash/uikit/components/image/image.tsx";
import Subtext from "@yourdash/uikit/components/subtext/subtext.tsx";
import TextInput from "@yourdash/uikit/components/textInput/textInput.tsx";
import styles from "./index.cards.module.scss";
import loginUser from "./lib/loginUser.ts";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const IndexCardsPage: FC<{ metadata?: EndpointResponseLoginInstanceMetadata }> = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<{ avatar: string; fullName: { first: string; last: string }; isValid: boolean }>({
    avatar: "",
    fullName: { first: "", last: "" },
    isValid: false,
  });
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (coreCSI.getUsername() !== "") {
      setUsername(coreCSI.getUsername());
      fetch(`${coreCSI.getInstanceUrl()}/login/user/${coreCSI.getUsername()}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((resp) => {
          if (resp.error) {
            setUser({ avatar: "", fullName: { first: "", last: "" }, isValid: false });
          } else {
            setUser({
              avatar: `/login/user/${coreCSI.getUsername()}/avatar`,
              fullName: resp.name,
              isValid: true,
            });
          }
        })
        .catch(() => {
          setUser({ avatar: "", fullName: { first: "", last: "" }, isValid: false });
        });
    }
  }, []);

  return (
    <div className={styles.page}>
      <Card className={clippy(styles.formCard)}>
        {user.isValid ? (
          <>
            <Image
              className={styles.avatar}
              authenticatedImage
              src={user.avatar}
              accessibleLabel={"Your Avatar"}
            />
            <Heading
              level={2}
              text={`${user.fullName.first} ${user.fullName.last}`}
            />
          </>
        ) : (
          <Heading
            level={3}
            text={"Login"}
          />
        )}
        <TextInput
          accessibleName={"Username"}
          placeholder={"Username"}
          type={"username"}
          defaultValue={coreCSI.getUsername() || ""}
          onChange={(val) => {
            fetch(`${coreCSI.getInstanceUrl()}/login/user/${val}`, {
              mode: "cors",
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            })
              .then((res) => res.json())
              .then((resp) => {
                if (resp.error) {
                  setUser({ avatar: "", fullName: { first: "", last: "" }, isValid: false });
                } else {
                  setUser({
                    avatar: `/login/user/${val}/avatar`,
                    fullName: resp.name,
                    isValid: true,
                  });
                }
              })
              .catch(() => {
                setUser({ avatar: "", fullName: { first: "", last: "" }, isValid: false });
              });

            setUsername(val);
          }}
        />
        <TextInput
          accessibleName={"Password"}
          placeholder={"Password"}
          type={"password"}
          onChange={(val) => {
            setPassword(val);
          }}
          onEnter={() => {
            if (!(username === "" || password === "" || !user.isValid))
              loginUser(username, password)
                .then(() => {
                  navigate("/login/success");
                })
                .catch(() => {
                  console.log("TODO: implement a toast notification here for a failed login!");
                });
          }}
        />
        <Button
          className={styles.button}
          text={"Login"}
          disabled={username === "" || password === "" || !user.isValid}
          onClick={() => {
            loginUser(username, password)
              .then(() => {
                navigate("/login/success");
              })
              .catch(() => {
                console.log("TODO: implement a toast notification here for a failed login!");
              });
          }}
        />
        <Subtext
          className={styles.instanceUrl}
          text={coreCSI.getInstanceUrl()}
        />
      </Card>
      <Card className={styles.metadataCard}>
        <Image
          containerClassName={styles.backgroundImageContainer}
          className={styles.backgroundImage}
          src={"/login/instance/background"}
          authenticatedImage
          accessibleLabel={""}
        />
        <Flex
          direction={"column"}
          className={styles.metadata}
        >
          <Heading
            level={1}
            text={props.metadata?.title || "Unknown instance title"}
            className={styles.title}
          />
          {props.metadata?.message && (
            <Subtext
              className={styles.message}
              text={props.metadata.message}
            />
          )}
        </Flex>
      </Card>
    </div>
  );
};

export default IndexCardsPage;
