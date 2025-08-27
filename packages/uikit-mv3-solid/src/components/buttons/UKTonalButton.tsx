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
        background-color: ${theme.sys.color["secondary-container"]()};
        color: ${theme.sys.color["on-secondary-container"]()};

        &:hover {
            &::after {
                background-color: ${applyTransparency(
                    theme.sys.color["on-secondary"](),
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
            background: ${theme.sys.color["secondary-container"]()};
            color: ${theme.sys.color["on-secondary-container"]()};

            &[data-toggled="true"] {
                background: ${theme.sys.color.secondary()};
                color: ${theme.sys.color["on-secondary"]()};
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
        >
            {props.children}
        </BaseButton>
    );
};

export default UKTonalButton;
