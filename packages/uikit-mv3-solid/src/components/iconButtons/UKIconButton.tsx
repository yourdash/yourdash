import type { Component } from "solid-js";
import { css } from "solid-styled-components";
import UKIcon from "../icon/UKIcon";
import type { IconButtonSize } from "./lib/size";

const UKIconButton: Component<{
    icon: string;
    alt: string;
    onClick(): void;
    width: "default" | "narrow" | "wide";
    shape: "round" | "square";
    size: IconButtonSize;
}> = (props) => {
    return (
        <button onClick={props.onClick} class={css``}>
            <UKIcon>{props.icon}</UKIcon>
        </button>
    );
};

export default UKIconButton;
