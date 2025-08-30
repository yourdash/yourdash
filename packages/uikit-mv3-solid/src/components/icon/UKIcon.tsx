import type { Component } from "solid-js";
import { css } from "solid-styled-components";
import "./icon.css";
import clsx from "clsx";

function getClasses() {
    return css`
        font-family: "Material Symbols Rounded";
        font-weight: normal;
        font-style: normal;
        font-size: var(--icon-size, 24px);
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        user-select: none;
        pointer-events: none;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
    `;
}

const UKIcon: Component<{ children: string; class?: string }> = (props) => {
    return <span class={clsx(getClasses(), props.class)}>{props.children}</span>;
};

export default UKIcon;
