/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import KeyPointsCard from "./components/content/KeyPointsCard.tsx";
import IndexPageHero from "./components/Hero/Hero.tsx";
import UKButton from "@yourdash/uikit-embedded/src/components/button/UKButton.js";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <IndexPageHero />
      <section className={"max-w-5xl mx-auto px-6 lg:px-8"}>
        <section className={"lg:flex-row flex-col pt-4 flex lg:items-center lg:justify-between gap-12 w-full mb-16"}>
          <h3
            className={
              "text-4xl font-bold text-center lg:text-left mb-8 lg:mb-0 animate__animated animate__fadeInLeft animate__500ms animate__slow"
            }
          >
            {"Your Space, Your Rules:"}
            <br />
            {"Host Your Own YourDash"}
          </h3>
          <div className={"flex items-center gap-4 flex-col animate__animated animate__fadeInRight animate__500ms animate__slow relative"}>
            <span className={"lg:w-72 lg:text-right text-center"}>
              {
                "Desire a dashboard experience with complete control?  Deploy YourDash and establish your personalized environment within minutes."
              }
              <span className={"text-base font-thin text-gray-300"}>*</span>
            </span>
            <UKButton
              text={"Explore Documentation & Get Started"}
              onClick={() => {
                navigate("/docs/faq");
              }}
            />
            <span className={"text-xs text-gray-400 absolute top-full mt-2 flex gap-1"}>
              <span className={"text-base font-thin text-gray-300 align-top"}>*</span>
              {" Optimal performance is best experienced on modern browsers and devices."}
            </span>
          </div>
        </section>
      </section>
      {/* Key Points Cards */}
      <section className={"w-full p-4 pt-0 pb-0 gap-2 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 grid mb-4 max-w-6xl ml-auto mr-auto"}>
        <KeyPointsCard
          title={"Unleash Your Creativity"}
          content={
            "Customize YourDash to perfectly align with your needs. Leverage downloadable themes and plugins, or even develop your own, to craft a truly unique, personalized experience."
          }
          action={{
            label: "Discover Customization Options",
            onClick() {
              navigate("/docs/faq");
            },
          }}
        />
        <KeyPointsCard
          title={"Open Source and Community Driven"}
          content={
            "Transparency and collaboration are at our core. YourDash is fully open source, encouraging community contributions and providing complete visibility into the project's development."
          }
          action={{
            label: "Explore the Source Code",
            onClick() {
              window.location.href = "https://github.com/yourdash/yourdash";
            },
          }}
        />
        <KeyPointsCard
          title={"Part of a Growing Ecosystem"}
          content={
            "YourDash is more than just a dashboard; it's a component within a larger ecosystem of projects.  Explore the YourDash universe to discover complementary tools and integrations."
          }
          action={{
            label: "Discover Related Projects",
            onClick() {
              navigate("/projects");
            },
          }}
        />
      </section>
    </>
  );
};

export default Index;
