import type { ButtonSize } from "./lib/size.ts";
import type { ButtonShape } from "./lib/shape.ts";
import { css } from "solid-styled-components";
import type { Component, JSX } from "solid-js";
import BaseButton from "./lib/BaseButton.tsx";
import clsx from "clsx";
import dpToRem from "../../core/dp.ts";
import theme from "../../core/theme.ts";
import applyTransparency from "../../core/transparency.ts";

function getClasses(size: ButtonSize, shape: ButtonShape) {
    let classNames: string[] = [];

    classNames.push(css`
        position: relative;
        border: none;

        background-color: ${theme.sys.color.primary()};
        color: ${theme.sys.color["on-primary"]()};
        overflow: hidden;

        &:hover {
            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: ${applyTransparency(
                    theme.sys.color["on-primary"](),
                    theme.sys.state.hover["state-layer-opacity"](),
                )};
            }
        }

        &[disabled] {
            background-color: ${applyTransparency(theme.sys.color["on-surface"](), 0.1)};
            color: ${applyTransparency(theme.sys.color["on-surface"](), 0.38)};
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
                        }
                    `);
            }

            break;
    }

    return classNames;
}

const UKElevatedButton: Component<{
    children: JSX.Element;
    class?: string;
    disabled?: boolean;
    onClick: () => void;
    size?: ButtonSize;
    shape?: ButtonShape;
}> = (props) => {
    return (
        <BaseButton
            onClick={props.onClick}
            class={clsx(
                getClasses(props.size || "s", props.shape || "round", props.disabled || false),
                props.class,
            )}
            disabled={props.disabled || false}
        >
            {props.children}
        </BaseButton>
    );
};

export default UKElevatedButton;
