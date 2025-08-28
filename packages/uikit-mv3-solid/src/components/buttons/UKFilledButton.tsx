import type { ButtonSize } from "./lib/size.ts";
import { css } from "solid-styled-components";
import { type Component, createSignal, type JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import theme from "../../core/theme.ts";
import applyTransparency from "../../core/transparency.ts";

function getClasses(togglable?: boolean) {
    let classNames: string[] = [];

    classNames.push(css`
        background-color: ${theme.sys.color.primary()};
        color: ${theme.sys.color["on-primary"]()};

        &:hover {
            &::after {
                background-color: ${applyTransparency(
                    theme.sys.color["on-primary"](),
                    theme.sys.state.hover["state-layer-opacity"](),
                )};
            }
        }

        &:active {
            &::after {
                background-color: ${applyTransparency(
                    theme.sys.color["on-primary"](),
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
            background: ${theme.sys.color["surface-container"]()};
            color: ${theme.sys.color["on-surface-variant"]()};

            &[data-toggled="true"] {
                background: ${theme.sys.color.primary()};
                color: ${theme.sys.color["on-primary"]()};
            }
        `);
    }

    return classNames;
}

const UKFilledButton: Component<{
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

export default UKFilledButton;
