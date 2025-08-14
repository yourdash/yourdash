/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import "animate.css";
import "./main.css";
import { createRoot } from "react-dom/client";
// @ts-ignore
import ApplicationComponent from "@yourdash/application-uk-ewsgit-dash-web/dist/index.js";

const element = document.getElementById("root") as HTMLElement;

const loadingElement = document.createElement("h1");

loadingElement.style.display = "flex";
loadingElement.style.width = "100%";
loadingElement.style.height = "100%";
loadingElement.style.justifyContent = "center";
loadingElement.style.alignItems = "center";
loadingElement.innerText = "Loading Standalone YourDash Application...";

element.appendChild(loadingElement);

createRoot(element).render(<ApplicationComponent />);
