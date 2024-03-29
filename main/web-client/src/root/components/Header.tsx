/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import React from "react";
import { Link } from "react-router-dom";
import { useTranslateHomePage } from "@yourdash/shared/web/helpers/i18n";

const Header: React.FC = () => {
  const trans = useTranslateHomePage("index");

  return (
    <>
      <div
        className={
          "sticky top-0 w-full h-14 bg-base-800 flex items-center justify-center bg-opacity-75 backdrop-blur-lg z-10"
        }
      >
        <div className={"flex items-center justify-center h-full w-full"}>
          <img
            src={"/assets/productLogos/yourdash.svg"}
            className={"ml-auto h-10 pr-1 animate__fadeInDown animate__animated"}
            alt={""}
          />
          <h2 className={"font-bold text-3xl animate__fadeInDown animate__animated animate__250ms"}>Your</h2>
          <h2 className={"font-bold text-3xl animate__fadeInDown animate__animated animate__500ms"}>Dash</h2>
          <section className={"ml-auto mr-auto gap-2 flex items-center justify-center"}>
            <Link
              to={"/"}
              className={
                "hover:text-theme-500 active:text-theme-400 transition-colors cursor-pointer select-none animate__fadeInDown animate__animated animate__1000ms"
              }
            >
              {"Home"}
            </Link>
            <Link
              to={"/docs"}
              className={
                "hover:text-theme-500 active:text-theme-400 transition-colors cursor-pointer select-none animate__fadeInDown animate__animated animate__750ms sm:block hidden"
              }
            >
              {"Docs"}
            </Link>
            <Link
              to={"https://github.com/yourdash/yourdash"}
              className={
                "sm:block hidden hover:text-theme-500 active:text-theme-400 transition-colors cursor-pointer select-none animate__fadeInDown animate__animated animate__500ms"
              }
            >
              {"Contribute"}
            </Link>
            <Link
              to={"/login"}
              className={
                "pl-4 pr-4 pb-1.5 pt-1.5 hover:bg-theme-500 active:bg-theme-400 bg-theme-600 transition-colors select-none cursor-pointer rounded-full animate__fadeInDown animate__animated animate__250ms"
              }
            >
              {"Login"}
            </Link>
          </section>
        </div>
      </div>
      <section
        className={
          "w-full bg-container-bg p-1.5 flex items-center justify-center animate__animated animate__fadeInDown"
        }
      >
        <div
          className={
            "flex items-center justify-center gap-1 animate__animated animate__backInDown animate__duration_1500ms"
          }
        >
          {trans("BANNER.MESSAGE.CONTENT")}
          <Link className={"text-theme-300 hover:text-theme-400 active:text-theme-200"} to={"/docs/contribution"}>
            {trans("BANNER.MESSAGE.CALL_TO_ACTION")}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
