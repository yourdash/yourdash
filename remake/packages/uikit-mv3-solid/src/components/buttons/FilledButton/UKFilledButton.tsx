import type { Component } from "solid-js";
import type { ButtonSize } from "../size.ts";
import type { ButtonShape } from "../shape.ts";
import { css } from "solid-styled-components";
import dpToRem from "../../../core/dp.ts";
import theme from "../../../core/theme.ts";
import clsx from "clsx";
import type { ButtonColor } from "../color.ts";

function getClasses(size: ButtonSize, shape: ButtonShape, color: ButtonColor, disabled: boolean) {
    let classNames: string[] = [];

    classNames.push(css`
        border: none;
        transition: all ${theme.sys.motion["duration-200"]()}
            ${theme.sys.motion.easing.standard.accelerate()};
    `);

    switch (color) {
        case "filled":
            classNames.push(css`
                background-color: ${theme.sys.color.primary()};
                color: ${theme.sys.color["on-primary"]()};
                box-shadow: 0 ${dpToRem(1)} ${dpToRem(2)} ${theme.sys.color.shadow()};

                &:active,
                &:focus-visible {
                    box-shadow: 0 ${dpToRem(4)} ${dpToRem(4)} ${theme.sys.color.shadow()};
                }
            `);
            break;
        case "elevated":
            break;
        case "tonal":
            break;
        case "outlined":
            break;
        case "standard":
            break;
    }

    switch (size) {
        case "xs":
            break;
        case "s":
            classNames.push(css`
                height: ${dpToRem(40)};
                border-width: ${dpToRem(1)};
                padding-left: ${dpToRem(16)};
                padding-right: ${dpToRem(16)};
                gap: ${dpToRem(8)};
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(40)};

                        &:focus-visible,
                        &:active {
                            border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                            transition: border-radius ${theme.sys.motion["duration-50"]()}
                                ${theme.sys.motion.easing.standard.decelerate()};
                        }
                    `);
                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};

                        &:focus-visible,
                        &:active {
                            border-radius: ${theme.sys.shape.corner.full()};
                        }
                    `);
            }

            break;
        case "m":
            break;
        case "l":
            break;
        case "xl":
            break;
    }

    return classNames;
}

const UKFilledButton: Component<{
    children: string;
    onClick: () => void;
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ButtonColor;
    disabled?: boolean;
}> = ({ children, onClick, size = "s", shape = "round", color = "filled", disabled = false }) => {
    return (
        <button class={clsx(getClasses(size, shape, color, disabled))} onClick={onClick}>
            {children}
        </button>
    );
};

export default UKFilledButton;
