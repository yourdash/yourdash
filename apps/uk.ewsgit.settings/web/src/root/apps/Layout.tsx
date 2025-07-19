import React from "react";

// @ts-ignore
import { applicationIds } from "virtual:uk.ewsgit.settings/external-applications/file";
import {
  UKButton,
  UKHeading,
  UKSeparator,
  UKSidebar,
  UKSidebarContainer,
} from "@yourdash/uikit";
import { Outlet, useNavigate } from "react-router";

const AppsLayout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <UKSidebarContainer>
      <UKSidebar>
        <UKHeading text={"Applications"} level={3} />
        <UKSeparator direction={"column"} />
        {applicationIds.map((id: string) => {
          return (
            <UKButton
              key={id}
              onClick={() => {
                navigate(`/app/a/uk.ewsgit.settings/apps/${id}`);
              }}
              text={id}
            />
          );
        })}
      </UKSidebar>
      <Outlet />
    </UKSidebarContainer>
  );
};

export default AppsLayout;
