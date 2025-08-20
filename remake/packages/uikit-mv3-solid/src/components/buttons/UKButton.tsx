import type { Component } from "solid-js";
import { css } from "solid-styled-components";
import dpToRem from "../../core/dp.ts";
import theme from "../../core/theme.ts";
import clsx from "clsx";
import type { ButtonColor } from "./lib/color.ts";
import type { ButtonSize } from "./lib/size.ts";
import type { ButtonShape } from "./lib/shape.ts";

function getClasses(size: ButtonSize, shape: ButtonShape, color: ButtonColor, disabled: boolean) {
    let classNames: string[] = [];

    classNames.push(css`
        border: none;
    `);

    switch (size) {
        case "xs":
            classNames.push(css`
                height: ${dpToRem(32)};
                border-width: ${dpToRem(1)};
                padding-left: ${dpToRem(12)};
                padding-right: ${dpToRem(12)};
                gap: ${dpToRem(8)};
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(32)};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};
                    `);

                    if (!disabled) {
                        classNames.push(css`
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.small["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }
                        `);
                    }
                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};
                    `);

                    if (!disabled) {
                        classNames.push(css`
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.full()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }
                        `);
                    }
            }

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
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};
                    `);

                    if (!disabled) {
                        classNames.push(css`
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }
                        `);
                    }
                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};
                    `);

                    if (!disabled) {
                        classNames.push(css`
                            &:focus-visible,
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }
                        `);
                    }
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

const UKButton: Component<{
    children: string;
    onClick: () => void;
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: ButtonColor;
    disabled?: boolean;
}> = ({ children, onClick, size = "s", shape = "round", color = "filled", disabled = false }) => {
    return (
        <button
            class={clsx(getClasses(size, shape, color, disabled))}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default UKButton;
