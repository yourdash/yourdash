import type { ButtonSize } from "./lib/size.ts";
import type { ButtonShape } from "./lib/shape.ts";
import { css } from "solid-styled-components";
import type { Component, JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import theme from "../../core/theme.ts";
import applyTransparency from "../../core/transparency.ts";

function getClasses() {
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

        &[disabled] {
            background-color: ${applyTransparency(theme.sys.color["on-surface"](), 0.1)};
            color: ${applyTransparency(theme.sys.color["on-surface"](), 0.38)};

            &::after {
                background-color: transparent;
            }
        }
    `);

    return classNames;
}

const UKFilledButton: Component<{
    children: JSX.Element;
    class?: string;
    disabled?: boolean;
    onClick: () => void;
    size?: ButtonSize;
    shape?: ButtonShape;
}> = (props) => {
    return (
        <BaseButton
            size={props.size || "s"}
            shape={"round"}
            onClick={props.onClick}
            class={clsx(getClasses(), props.class)}
            disabled={props.disabled || false}
        >
            {props.children}
        </BaseButton>
    );
};

export default UKFilledButton;
