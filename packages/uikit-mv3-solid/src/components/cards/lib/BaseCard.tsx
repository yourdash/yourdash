import { type Component, type JSX } from "solid-js";
import clsx from "clsx";
import { css } from "solid-styled-components";

function getClasses() {
    let classNames: string[] = [];

    classNames.push(css`
        padding: 1rem;
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
