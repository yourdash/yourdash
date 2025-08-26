import { type Component, type JSX } from "solid-js";
import type { ButtonSize } from "./size.ts";
import clsx from "clsx";
import type { ButtonShape } from "./shape.ts";
import { css } from "solid-styled-components";
import theme from "../../../core/theme.ts";
import dpToRem from "../../../core/dp.ts";

function getClasses(size: ButtonSize, shape: ButtonShape) {
    let classNames: string[] = [];

    classNames.push(css`
        position: relative;
        border: none;
        overflow: hidden;
        font-family: ${theme.ref.typeface.plain()};
        user-select: none;

        &::after {
            transition: background-color ${theme.sys.motion["duration-100"]()}
                ${theme.sys.motion.easing.standard.decelerate()};
            content: "";
            position: absolute;
            background-color: transparent;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        &:hover {
            &::after {
                transition: background-color ${theme.sys.motion["duration-100"]()}
                    ${theme.sys.motion.easing.standard.accelerate()};
            }
        }

        &[disabled] {
            cursor: not-allowed;
        }
    `);

    switch (size) {
        case "xs":
            classNames.push(css`
                height: ${dpToRem(32)};
                border-width: ${dpToRem(1)};
                padding-left: ${dpToRem(12)};
                padding-right: ${dpToRem(12)};
                gap: ${dpToRem(8)};
                font-weight: ${theme.ref.typeface["weight-medium"]()};
                font-size: ${dpToRem(14)};
                line-height: ${dpToRem(20)};
                letter-spacing: ${dpToRem(0.1)};
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(32)};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.small["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);
                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.full()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);
            }

            break;
        case "s":
            classNames.push(css`
                height: ${dpToRem(40)};
                border-width: ${dpToRem(1)};
                padding-left: ${dpToRem(16)};
                padding-right: ${dpToRem(16)};
                gap: ${dpToRem(8)};
                font-weight: ${theme.ref.typeface["weight-medium"]()};
                font-size: ${dpToRem(14)};
                line-height: ${dpToRem(20)};
                letter-spacing: ${dpToRem(0.1)};
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(40)};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);

                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);
            }

            break;
        case "m":
            classNames.push(css`
                height: ${dpToRem(56)};
                border-width: ${dpToRem(1)};
                padding-left: ${dpToRem(24)};
                padding-right: ${dpToRem(24)};
                gap: ${dpToRem(8)};
                font-weight: ${theme.ref.typeface["weight-medium"]()};
                font-size: ${dpToRem(16)};
                line-height: ${dpToRem(24)};
                letter-spacing: ${dpToRem(0.15)};
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(56)};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);

                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.large["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);
            }

            break;
        case "l":
            classNames.push(css`
                height: ${dpToRem(96)};
                border-width: ${dpToRem(2)};
                padding-left: ${dpToRem(48)};
                padding-right: ${dpToRem(48)};
                gap: ${dpToRem(12)};
                font-weight: ${theme.ref.typeface["weight-regular"]()};
                font-size: ${dpToRem(24)};
                line-height: ${dpToRem(32)};
                letter-spacing: 0;
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(96)};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.large["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);

                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.large["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);
            }

            break;
        case "xl":
            classNames.push(css`
                height: ${dpToRem(132)};
                border-width: ${dpToRem(3)};
                padding-left: ${dpToRem(64)};
                padding-right: ${dpToRem(64)};
                gap: ${dpToRem(16)};
                font-weight: ${theme.ref.typeface["weight-regular"]()};
                font-size: ${dpToRem(32)};
                line-height: ${dpToRem(40)};
                letter-spacing: 0;
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${dpToRem(132)};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.accelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${theme.sys.shape.corner.large["default-size"]()};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline: ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);

                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner["extra-large"]["default-size"]()};
                        transition: all ${theme.sys.motion["duration-200"]()}
                            ${theme.sys.motion.easing.standard.decelerate()};

                        &:not(&[disabled]) {
                            &:focus-visible,
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${theme.sys.motion["duration-50"]()}
                                    ${theme.sys.motion.easing.standard.decelerate()};
                            }

                            &:focus-visible {
                                outline:
                                    ${dpToRem(4)} solid transparent,
                                    ${dpToRem(2)} solid ${theme.sys.color.outline()};
                            }
                        }
                    `);
            }

            break;
    }

    return classNames;
}

const BaseButton: Component<{
    children: JSX.Element;
    class: string;
    disabled: boolean;
    size: ButtonSize;
    shape: ButtonShape;
    onClick: (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
}> = (props) => {
    return (
        <button
            class={clsx(props.class, getClasses(props.size, props.shape))}
            disabled={props.disabled}
            onClick={(e) => {
                props.onClick(e);
            }}
        >
            {props.children}
        </button>
    );
};

export default BaseButton;
