import type { ButtonSize } from "./lib/size.ts";
import { css } from "solid-styled-components";
import type { Component, JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import theme from "../../core/theme.ts";
import dpToRem from "../../core/dp.ts";

function getClasses(disabled: boolean) {
    let classNames: string[] = [];

    classNames.push(css`
        border: none;
        box-shadow: 0 ${dpToRem(1)} ${dpToRem(2)} ${theme.sys.color.shadow()};
    `);

    if (!disabled) {
        classNames.push(css`
            &:active,
            &:focus-visible {
                box-shadow: 0 ${dpToRem(2)} ${dpToRem(6)} ${theme.sys.color.shadow()};
            }
        `);
    }

    return classNames;
}

const UKElevatedButton: Component<{
    children: JSX.Element;
    class: string;
    disabled?: boolean;
    onClick: () => void;
    size: ButtonSize;
    toggled?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
}> = (props) => {
    return (
        <BaseButton
            onClick={props.onClick}
            size={props.size}
            class={clsx(getClasses(props.disabled || false), props.class)}
            disabled={props.disabled || false}
            leadingIcon={props.leadingIcon}
            trailingIcon={props.trailingIcon}
        >
            {props.children}
        </BaseButton>
    );
};

export default UKElevatedButton;
