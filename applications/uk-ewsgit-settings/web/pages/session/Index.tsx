/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import Card from "@yourdash/chiplet/components/card/Card";
import Icon from "@yourdash/chiplet/components/icon/Icon";
import { UKIcon } from "@yourdash/chiplet/components/icon/iconDictionary";
import IconButton from "@yourdash/chiplet/components/iconButton/IconButton";
import React, { useState, useEffect } from "react";
import coreCSI from "@yourdash/csi/coreCSI";
import { type IYourDashSession, YOURDASH_SESSION_TYPE } from "@yourdash/shared/core/session";
import BasePageLayout from "../../components/BasePageLayout";

const SettingsPageSession: React.FC = () => {
  const [reloadNum, setReloadNum] = useState(0);
  const [sessions, setSessions] = useState<IYourDashSession[]>([]);
  const [personalServerAccelerationSessions, setPersonalServerAcceleration] = useState<IYourDashSession<YOURDASH_SESSION_TYPE.desktop>[]>(
    [],
  );

  useEffect(() => {
    coreCSI.syncGetJson("/user/sessions", (data) => {
      setSessions(data.sessions);
    });

    coreCSI.syncGetJson("/core/personal-server-accelerator/sessions", (data) => {
      setPersonalServerAcceleration(data.sessions);
    });
  }, [reloadNum]);

  return (
    <BasePageLayout
      title={"Sessions"}
      noBack={false}
    >
      <main className={"col-span-2 p-4"}>
        <section className={"gap-2 flex flex-wrap"}>
          {sessions.map((session) => (
            <Card
              className={"p-0 overflow-hidden flex flex-grow flex-col min-w-[14rem]"}
              key={session.sessionId}
            >
              <div className={"font-semibold text-6xl text-container-fg pl-4 pt-2 pb-2 flex gap-4 w-full"}>
                {session.sessionId}
                <Icon
                  className={"aspect-square h-8 m-auto ml-0"}
                  icon={
                    session.type === YOURDASH_SESSION_TYPE.web
                      ? UKIcon.Browser
                      : session.type === YOURDASH_SESSION_TYPE.cli
                        ? UKIcon.Terminal
                        : session.type === YOURDASH_SESSION_TYPE.desktop
                          ? UKIcon.DeviceDesktop
                          : UKIcon.Question
                  }
                />
              </div>
              <div className={"w-full bg-container-secondary-bg pl-4 p-3 flex text-container-fg items-center justify-between"}>
                <div className={"flex flex-col gap-1"}>
                  <div>
                    Type: {session.type === YOURDASH_SESSION_TYPE.web && "Web"}
                    {session.type === YOURDASH_SESSION_TYPE.cli && "Cli"}
                    {session.type === YOURDASH_SESSION_TYPE.desktop && "Desktop"}
                    {session.type === YOURDASH_SESSION_TYPE.external && "External"}
                  </div>
                  <div>Supports PSA: {(!!session.isNodeJS).toString()}</div>
                </div>
                <IconButton
                  icon={UKIcon.X}
                  onClick={() => {
                    coreCSI.deleteJson(`/core/session/${session.sessionId}`, () => {
                      setReloadNum(reloadNum + 1);
                    });
                  }}
                />
              </div>
            </Card>
          ))}
        </section>
      </main>
    </BasePageLayout>
  );
};

export default SettingsPageSession;
