/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { createContext } from "react";

const SidebarContext = createContext({
  openSidebar: () => {},
  closeSidebar: () => {},
  toggleSidebar: () => {},
  isOpen: true,
});

export default SidebarContext;
