import type { ButtonSize } from "./lib/size.ts";
import { css } from "solid-styled-components";
import { type Component, createSignal, type JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import theme from "../../core/theme.ts";
import applyTransparency from "../../core/transparency.ts";
import dpToRem from "../../core/dp.ts";

function getClasses(togglable?: boolean) {
    let classNames: string[] = [];

    classNames.push(css`
        background-color: transparent;
        color: ${theme.sys.color["on-surface-variant"]()};
        border-width: ${dpToRem(1)};
        border-style: solid;
        border-color: ${theme.sys.color["outline-variant"]()};

        &:hover {
            &::after {
                background-color: ${applyTransparency(
                    theme.sys.color["on-surface-variant"](),
                    theme.sys.state.hover["state-layer-opacity"](),
                )};
            }
        }

        &:active {
            &::after {
                background-color: ${applyTransparency(
                    theme.sys.color["on-secondary-container"](),
                    theme.sys.state.pressed["state-layer-opacity"](),
                )};
            }
        }

        &[disabled] {
            background-color: ${applyTransparency(theme.sys.color["on-surface"](), 0.1)};
            color: ${applyTransparency(theme.sys.color["on-surface"](), 0.38)};

            &::after {
                background-color: transparent;
            }
        }
    `);

    if (togglable) {
        classNames.push(css`
            &.${classNames[0]} {
                color: ${theme.sys.color["on-surface-variant"]()};

                &[data-toggled="true"] {
                    background: ${theme.sys.color["inverse-surface"]()};
                    color: ${theme.sys.color["inverse-on-surface"]()};
                }
            }
        `);
    }

    return classNames;
}

const UKOutlinedButton: Component<{
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

export default UKOutlinedButton;
