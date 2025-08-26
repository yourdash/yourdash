import { type Component, type JSX } from "solid-js";
import clsx from "clsx";
import { css } from "solid-styled-components";

function getClasses() {
    let classNames: string[] = [];

    classNames.push(css``);

    return classNames;
}

const BaseButton: Component<{
    children: JSX.Element;
    class: string;
}> = (props) => {
    return (
        <button
            class={clsx(props.class, getClasses(props.size, props.shape))}
            disabled={props.disabled}
            onClick={(e) => {
                props.onClick(e);
            }}
        >
            {props.children}
        </button>
    );
};

export default BaseButton;
