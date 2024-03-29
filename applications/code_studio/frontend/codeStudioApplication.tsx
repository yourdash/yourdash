/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";

import CodeStudioEditor from "./core/Editor";
import TabContainer from "./ui/Tabs/TabContainer";
import StatusBar from "./ui/StatusBar/StatusBar";
import FileManager from "./ui/FileManager/FileManager";
import Symbols from "./ui/Symbols/Symbols";

const CodeStudioApplication: React.FC = () => (
  <main className={"grid grid-rows-[auto,1fr,auto] h-full"}>
    {/* Tabs */}
    <section>
      <TabContainer/>
    </section>
    {/* Content */}
    <section className={"grid grid-cols-[auto,1fr,auto] h-full overflow-hidden"}>
      <section>
        <FileManager/>
      </section>
      <CodeStudioEditor/>
      <section>
        <Symbols/>
      </section>
    </section>
    {/* StatusBar*/}
    <section>
      <StatusBar/>
    </section>
  </main>
);

export { CodeStudioApplication as default };
