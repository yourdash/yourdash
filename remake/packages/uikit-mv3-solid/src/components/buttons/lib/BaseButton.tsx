import { type Component, type JSX } from "solid-js";

const BaseButton: Component<{
    children: JSX.Element;
    class: string;
    disabled: boolean;
    onClick: () => void;
}> = (props) => {
    return (
        <button class={props.class} disabled={props.disabled} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default BaseButton;
