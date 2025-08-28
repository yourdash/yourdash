import { type Component, type JSX } from "solid-js";
import clsx from "clsx";
import { css } from "solid-styled-components";
import dpToRem from "../../../core/dp.ts";

function getClasses() {
    let classNames: string[] = [];

    classNames.push(css`
        padding-left: ${dpToRem(16)};
        padding-right: ${dpToRem(16)};
    `);

    return classNames;
}

const BaseCard: Component<{
    children: JSX.Element;
    class: string;
}> = (props) => {
    return <div class={clsx(props.class, getClasses())}>{props.children}</div>;
};

export default BaseCard;
