import type { Component, JSX } from "solid-js";

const BaseSplitButton: Component<{ textButton: JSX.Element; iconButton: JSX.Element }> = (props) => {
    return (
        <div>
            {props.textButton}
            {props.iconButton}
        </div>
    );
};

export default BaseSplitButton;
