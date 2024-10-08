/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import MajorButton from "@yourdash/chiplet/components/majorButton/MajorButton.tsx";
import KeyPointsCard from "./components/content/KeyPointsCard.tsx";
import IndexPageHero from "./components/Hero/Hero.tsx";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <IndexPageHero />
      <section className={"max-w-6xl ml-auto mr-auto grid xl:grid-cols-3 gap-2 grid-cols-2 pb-12"}>
        <section
          className={"lg:flex-row flex-col pt-8 flex lg:justify-between items-center gap-4 w-full pl-8 pr-8 mb-10 xl:col-span-3 col-span-2"}
        >
          <h3 className={"text-7xl lg:text-left text-center font-black animate__animated animate__fadeInLeft animate__500ms animate__slow"}>
            {"SECTIONS.HOST_YOUR_OWN.TITLE"}
          </h3>
          <div
            className={
              "flex lg:items-end items-center gap-4 flex-col animate__animated animate__fadeInRight animate__500ms animate__slow relative"
            }
          >
            <span className={"lg:w-72 lg:text-right text-center text-2xl"}>
              {"SECTIONS.HOST_YOUR_OWN.CONTENT"}
              <span className={"text-base font-thin text-gray-300"}>*</span>
            </span>
            <MajorButton
              onClick={() => {
                navigate("/docs/faq");
              }}
            >
              {"SECTIONS.HOST_YOUR_OWN.ACTION"}
            </MajorButton>
            <span className={"text-xs text-gray-400 absolute top-full mt-2"}>*{"SECTIONS.HOST_YOUR_OWN.DISCLAIMER"}</span>
          </div>
        </section>
      </section>
      {/* Key Points Cards */}
      <section className={"w-full p-4 pt-0 pb-0 gap-2 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid mb-4"}>
        <KeyPointsCard
          title={"SECTIONS.LIMITLESS_PERSONALISATION.TITLE"}
          content={"SECTIONS.LIMITLESS_PERSONALISATION.CONTENT"}
          action={{
            label: "SECTIONS.LIMITLESS_PERSONALISATION.ACTION",
            onClick: () => {
              navigate("/docs/faq");
            },
          }}
        />
        <KeyPointsCard
          title={"SECTIONS.OPEN_SOURCED.TITLE"}
          content={"SECTIONS.OPEN_SOURCED.CONTENT"}
          action={{
            label: "SECTIONS.OPEN_SOURCED.ACTION",
            onClick: () => {
              navigate("/docs/faq");
            },
          }}
        />
        <KeyPointsCard
          title={"SECTIONS.PROJECTS.TITLE"}
          content={"SECTIONS.PROJECTS.CONTENT"}
          action={{
            label: "SECTIONS.PROJECTS.ACTION",
            onClick: () => {
              navigate("/projects");
            },
          }}
        />
      </section>
    </>
  );
};

export default Index;
