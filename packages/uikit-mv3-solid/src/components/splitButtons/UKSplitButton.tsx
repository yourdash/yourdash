import type { Component, JSX } from "solid-js";
import type { ButtonSize } from "../button/lib/size";

const UKSplitButton: Component<{
    textButton: JSX.Element;
    iconButton: JSX.Element;
    children: string;
    class?: string;
    disabled?: boolean;
    onClick: (value?: boolean) => void;
    size?: ButtonSize;
    // TODO: create a type for this
    dropDownItems: {}[];
}> = (props) => {
    return (
        <div class={props.class}>
            {props.textButton}
            {props.iconButton}
        </div>
    );
};

export default UKSplitButton;
