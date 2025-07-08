/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import {UKCard, useToasts, UKImage, UKHeading, UKSeparator, UKTextInput, UKButton, UKFlex, UKSubText} from "@yourdash/uikit";
import clippy from "../../lib/clippy.js";
import styles from "./index.cards.module.scss";
import loginUser from "./lib/loginUser.ts";
import { FC, useEffect, useState } from "react";
import {useNavigate} from "react-router";
import {toAuthImgUrl, tun} from "@yourdash/tunnel"

enum LoginLayout {
  SIDEBAR,
  MODAL,
  CARDS,
}

interface EndpointResponseLoginInstanceMetadata {
  title: string;
  message?: string;
  loginLayout: LoginLayout;
}

const IndexCardsPage: FC<{ metadata: EndpointResponseLoginInstanceMetadata | null }> = (props) => {
  const navigate = useNavigate();
  const toast = useToasts();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<{ avatar: string; fullName: { first: string; last: string }; isValid: boolean }>({
    avatar: "",
    fullName: { first: "", last: "" },
    isValid: false,
  });

  useEffect(() => {
    if (localStorage.getItem("current_user_username") || "" !== "") {
      setUsername(localStorage.getItem("current_user_username") || "");
      fetch(
        `${tun.baseURL}/login/user/${localStorage.getItem("current_user_username") || ""}`,
        {
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        },
      )
        .then((res) => res.json())
        .then((resp) => {
          if (resp.error) {
            setUser({
              avatar: "",
              fullName: { first: "", last: "" },
              isValid: false,
            });
          } else {
            setUser({
              avatar: `/login/user/${localStorage.getItem("current_user_username") || ""}/avatar`,
              fullName: resp.name,
              isValid: true,
            });
          }
        })
        .catch(() => {
          setUser({
            avatar: "",
            fullName: { first: "", last: "" },
            isValid: false,
          });
        });
    }
  }, []);

  useEffect(() => {
    fetch(`${tun.baseURL}/login/user/${username}`, {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((resp) => {
        if (resp.error) {
          setUser({
            avatar: "",
            fullName: { first: "", last: "" },
            isValid: false,
          });
        } else {
          setUser({
            avatar: `/login/user/${username}/avatar`,
            fullName: resp.name,
            isValid: true,
          });
        }
      })
      .catch(() => {
        setUser({
          avatar: "",
          fullName: { first: "", last: "" },
          isValid: false,
        });
      });
  }, [username]);

  return (
    <div className={styles.page}>
      <UKCard className={clippy(styles.formCard)}>
        {user.isValid ? (
          <>
            <UKImage
              className={styles.avatar}
              src={toAuthImgUrl(user.avatar)}
              accessibleLabel={"Your Avatar"}
            />
            <UKHeading
              level={2}
              text={`${user.fullName.first} ${user.fullName.last}`}
            />
          </>
        ) : (
          <UKHeading level={3} text={"Login"} />
        )}
        <UKSeparator direction={"column"} />
        <UKTextInput
          accessibleName={"Username"}
          placeholder={"Username"}
          type={"username"}
          defaultValue={localStorage.getItem("current_user_username") || ""}
          getValue={setUsername}
          autoComplete={`yourdash-instance-login username instance-${tun.baseURL}`}
        />
        <UKTextInput
          accessibleName={"Password"}
          placeholder={"Password"}
          type={"password"}
          getValue={setPassword}
          autoComplete={`yourdash-instance-login password instance-${tun.baseURL}`}
          onSubmit={() => {
            if (!(username === "" || password === "" || !user.isValid)) {
              loginUser(username, password)
                .then(() => {
                  navigate("/login/success");
                })
                .catch(() => {
                  console.log(
                    "TODO: implement a toasts notification here for a failed login!",
                  );
                });
            }
          }}
        />
        <UKSeparator direction={"column"} />
        <UKButton
          className={styles.button}
          text={"Login"}
          disabled={username === "" || password === "" || !user.isValid}
          onClick={() => {
            loginUser(username, password)
              .then(() => {
                navigate("/login/success");
              })
              .catch(() => {
                toast.create({
                  type: "error",
                  content: {
                    title: "Login Failure",
                    body: "You login attempt failed, please try again. The password may be incorrect!",
                  },
                });
              });
          }}
        />
        <UKSubText className={styles.instanceUrl} text={tun.baseURL} />
      </UKCard>
      <UKCard
        className={styles.metadataCard}
        containerClassName={styles.metadataCardContainer}
      >
        <UKImage
          containerClassName={styles.backgroundImageContainer}
          className={styles.backgroundImage}
          src={toAuthImgUrl("/login/instance/background")}
          accessibleLabel={""}
        />
        <UKFlex direction={"column"} className={styles.metadata}>
          <UKHeading
            level={1}
            text={props.metadata?.title || "Unknown instance title"}
            className={styles.title}
          />
          {props.metadata?.message && (
            <UKSubText
              className={styles.message}
              text={props.metadata.message}
            />
          )}
        </UKFlex>
      </UKCard>
    </div>
  );
};

export default IndexCardsPage;
