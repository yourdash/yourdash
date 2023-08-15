import React from "react";

export interface IMajorButton extends React.ComponentPropsWithoutRef<"button"> {
  className?: string;
}

const MajorButton: React.FC<IMajorButton> = ( { children, className, ...extraProps } ) => (
  <button
    type="button"
    {...extraProps}
    className={`pl-4 pr-4 h-[36px] enabled:hover:bg-theme-500 enabled:active:bg-theme-400 enabled:bg-theme-600 transition-colors select-none cursor-pointer rounded-full font-normal tracking-normal disabled:bg-gray-600 disabled:hover:bg-gray-500 disabled:active:bg-gray-400 ${ className }`}
  >
    {children}
  </button>
);

export default MajorButton;