/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import Button from "@yourdash/uikit/depChiplet/components/button/Button";
import Card from "@yourdash/uikit/depChiplet/components/card/Card";
import DropdownButton from "@yourdash/uikit/depChiplet/components/dropdownButton/DropdownButton";
import Heading from "@yourdash/uikit/depChiplet/components/heading/Heading";
import { YourDashIcon } from "@yourdash/uikit/depChiplet/components/icon/iconDictionary";
import IconButton from "@yourdash/uikit/depChiplet/components/iconButton/IconButton";
import MajorButton from "@yourdash/uikit/depChiplet/components/majorButton/MajorButton";
import TextBox from "@yourdash/uikit/depChiplet/components/textBox/TextBox";
import TextInput from "@yourdash/uikit/depChiplet/components/textInput/TextInput";
import React, { useEffect, useState } from "react";
import csi from "@yourdash/csi/csi";
import ChatbotProfilePreview from "../../../../components/ChatbotProfilePreview/ChatbotProfilePreview";
import styles from "./CreateBotPage.module.scss";
import { useNavigate } from "react-router-dom";

const CreateBotPage: React.FC = () => {
  const navigate = useNavigate();

  const [teams, setTeams] = useState<{ displayName: string; teamName: string }[]>([]);
  const [team, setTeam] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [displayName, setDisplayName] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [statusLabel, setStatusLabel] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string>(YourDashIcon.ServerError);

  useEffect(() => {
    csi.getTeams().then(async (t) => {
      setTeams(
        await Promise.all(
          t.map(async (x) => {
            return { teamName: x.teamName, displayName: await x.getDisplayName() };
          }),
        ),
      );
      setTeam(t[0].teamName);
    });
  }, []);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <IconButton
          icon={YourDashIcon.ChevronLeft}
          onClick={() => {
            window.history.back();
          }}
        />
        <Heading level={2}>Create Chatbot</Heading>
      </header>
      <Card showBorder={true} className={styles.previewPane}>
        <Heading level={2} className={"pb-2"}>
          Profile Preview
        </Heading>
        <ChatbotProfilePreview
          username={username}
          displayName={displayName}
          avatarUrl={avatarUrl}
          bio={bio}
          status={statusLabel + " " + status}
          commands={["ping", "pong", "foo", "bar"]}
        />
      </Card>
      <Card showBorder={true} className={styles.optionsPane}>
        <Heading level={2}>Profile Options</Heading>
        <DropdownButton
          items={
            teams
              ? teams.map((t) => {
                  return {
                    label: t.displayName,
                    onClick() {
                      setTeam(t.teamName);
                    },
                  };
                })
              : []
          }
        >
          Select Team
        </DropdownButton>
        <Heading level={3}>Bot Username</Heading>
        <TextInput
          preceedingInlay={
            username && (
              <span className={"animate__animated animate__slideInLeft animate__duration_500ms select-none"}>@</span>
            )
          }
          onChange={(value) => {
            setUsername(value);
          }}
          accessibleName={"Bot Username"}
          placeholder={"Bot Username"}
        />
        <Heading level={3}>Bot Name</Heading>
        <TextInput
          onChange={(value) => {
            setDisplayName(value);
          }}
          accessibleName={"Bot Name"}
          placeholder={"Bot Name"}
        />
        <Heading level={3}>Bot Description</Heading>
        <TextBox
          placeholder={"Description"}
          onChange={(e) => {
            setBio(e.currentTarget.value);
          }}
        />
        <Heading level={3}>Bot Avatar</Heading>
        <TextInput
          accessibleName={"Avatar URL"}
          placeholder={"Avatar URL"}
          defaultValue={"internal://ServerError"}
          onChange={(value) => {
            setAvatarUrl(value);
          }}
        />
        <Heading level={3}>Bot Status</Heading>
        <div className={"flex gap-2 w-full"}>
          <DropdownButton
            items={[
              {
                label: "Playing",
                onClick() {
                  setStatusLabel("Playing");
                },
              },
              {
                label: "Streaming",
                onClick() {
                  setStatusLabel("Streaming");
                },
              },
              {
                label: "Watching",
                onClick() {
                  setStatusLabel("Watching");
                },
              },
              {
                label: "Listening",
                onClick() {
                  setStatusLabel("Listening");
                },
              },
            ]}
          >
            Playing
          </DropdownButton>
          <TextInput
            className={"flex-grow"}
            onChange={(value) => {
              setStatus(value);
            }}
            accessibleName={"Status"}
            placeholder={"Status"}
          />
        </div>
        <MajorButton
          onClick={() => {
            csi.postJson(
              "/app/chatbots/team/:teamId/create-bot/:botId",
              {
                username,
                displayName,
                bio,
                avatarUrl,
              },
              () => {
                navigate(`/app/a/chatbots/team/${csi.getUserName()}/manage/${username}`);
              },
              (error) => {
                alert(error);
              },
            );
          }}
        >
          Create bot
        </MajorButton>
        <Button
          onClick={() => {
            navigate("/app/a/chatbots/bot/0/manage/nodes");
          }}
        >
          DEVELOPER Nodes
        </Button>
      </Card>
    </main>
  );
};

export default CreateBotPage;