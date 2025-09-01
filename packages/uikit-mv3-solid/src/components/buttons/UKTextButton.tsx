import type { ButtonSize } from "./lib/size.ts";
import { css } from "solid-styled-components";
import { type Component, type JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import { uk } from "../../core/design/tokens.ts";

function getClasses() {
    let classNames: string[] = [];

    classNames.push(css`
        background-color: transparent;
        color: rgb(${uk.sys.color["primary"]});

        &:hover {
            &::after {
                background-color: rgb(
                    ${uk.sys.color["primary"]},
                    ${uk.sys.state.hover["state-layer-opacity"]}
                );
            }
        }

        &:active {
            &::after {
                background-color: rgb(
                    ${uk.sys.color["primary"]},
                    ${uk.sys.state.pressed["state-layer-opacity"]}
                );
            }
        }

        &[disabled] {
            background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
            color: rgb(${uk.sys.color["on-surface"]}, 0.38);

            &::after {
                background-color: transparent;
            }
        }
    `);

    return classNames;
}

const UKTextButton: Component<{
    children: JSX.Element;
    class?: string;
    disabled?: boolean;
    onClick: () => void;
    size?: ButtonSize;
    leadingIcon?: string;
    trailingIcon?: string;
}> = (props) => {
    return (
        <BaseButton
            size={props.size || "s"}
            toggled={false}
            onClick={() => {
                props.onClick();
            }}
            class={clsx(getClasses(), props.class)}
            disabled={props.disabled || false}
            leadingIcon={props.leadingIcon}
            trailingIcon={props.trailingIcon}
        >
            {props.children}
        </BaseButton>
    );
};

export default UKTextButton;
