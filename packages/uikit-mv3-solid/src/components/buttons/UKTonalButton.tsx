import type { ButtonSize } from "./lib/size.ts";
import { css } from "solid-styled-components";
import { type Component, createSignal, type JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import { uk } from "../../core/design/tokens.ts";

function getClasses(togglable?: boolean) {
    let classNames: string[] = [];

    classNames.push(css`
        background-color: rgb(${uk.sys.color["secondary-container"]});
        color: rgb(${uk.sys.color["on-secondary-container"]});

        &:hover {
            &::after {
                background-color: rgb(
                    ${uk.sys.color["on-secondary"]},
                    ${uk.sys.state.hover["state-layer-opacity"]}
                );
            }
        }

        &:active {
            &::after {
                background-color: rgb(
                    ${uk.sys.color["on-secondary-container"]},
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

    if (togglable) {
        classNames.push(css`
            background: rgb(${uk.sys.color["secondary-container"]});
            color: rgb(${uk.sys.color["on-secondary-container"]});

            &[data-toggled="true"] {
                background: rgb(${uk.sys.color.secondary});
                color: rgb(${uk.sys.color["on-secondary"]});
            }
        `);
    }

    return classNames;
}

const UKTonalButton: Component<{
    children: JSX.Element;
    class?: string;
    disabled?: boolean;
    onClick: (value?: boolean) => void;
    size?: ButtonSize;
    togglable?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
}> = (props) => {
    const [toggled, setToggled] = createSignal(false);

    return (
        <BaseButton
            size={props.size || "s"}
            toggled={toggled()}
            onClick={() => {
                if (props.togglable) {
                    setToggled(!toggled());
                    props.onClick(toggled());
                } else {
                    props.onClick();
                }
            }}
            class={clsx(getClasses(props.togglable), props.class)}
            disabled={props.disabled || false}
            leadingIcon={props.leadingIcon}
            trailingIcon={props.trailingIcon}
        >
            {props.children}
        </BaseButton>
    );
};

export default UKTonalButton;
