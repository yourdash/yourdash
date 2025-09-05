import { type Component, type JSX } from "solid-js";
import type { ButtonSize } from "./size.ts";
import clsx from "clsx";
import dpToRem from "../../../core/dp.ts";
import UKIcon from "../../icon/UKIcon.tsx";
import { css } from "solid-styled-components";
import { uk } from "../../../core/design/tokens.ts";

const iconClass = css`
    font-size: var(--icon-size);
`;

const BaseButton: Component<{
    children: JSX.Element;
    class: string;
    disabled: boolean;
    size: ButtonSize;
    toggled?: boolean;
    onClick: (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    leadingIcon?: string;
    trailingIcon?: string;
}> = (props) => {
    function getClasses(size: ButtonSize, toggled?: boolean) {
        let classNames: string[] = [];

        classNames.push(css`
            --padding-left: 0;
            --padding-right: 0;

            position: relative;
            border: none;
            overflow: hidden;
            font-family: ${uk.ref.typeface.plain};
            user-select: none;
            display: flex;
            align-items: center;

            outline-style: solid;
            outline-offset: ${dpToRem(2)};
            outline-width: 0;
            outline-color: transparent;

            &::after {
                transition: background-color ${uk.sys.motion["duration-100"]}
                    ${uk.sys.motion.easing.standard.decelerate};
                content: "";
                position: absolute;
                background-color: transparent;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }

            &:hover,
            &:active {
                &::after {
                    transition: background-color ${uk.sys.motion["duration-100"]}
                        ${uk.sys.motion.easing.standard.accelerate};
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
                    font-weight: ${uk.ref.typeface["weight-medium"]};
                    font-size: ${dpToRem(14)};
                    line-height: ${dpToRem(20)};
                    letter-spacing: ${dpToRem(0.1)};

                    --icon-size: ${dpToRem(20)};
                `);

                if (!toggled) {
                    classNames.push(css`
                        border-radius: ${dpToRem(32)};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.accelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${uk.sys.shape.corner.small["default-size"]};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
                            }
                        }
                    `);
                } else {
                    classNames.push(css`
                        border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${uk.sys.shape.corner.full};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
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
                    font-weight: ${uk.ref.typeface["weight-medium"]};
                    font-size: ${dpToRem(14)};
                    line-height: ${dpToRem(20)};
                    letter-spacing: ${dpToRem(0.1)};

                    --icon-size: ${dpToRem(20)};
                `);

                if (!toggled) {
                    classNames.push(css`
                        border-radius: ${dpToRem(40)};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.accelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
                            }
                        }
                    `);
                } else {
                    classNames.push(css`
                        border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
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
                    font-weight: ${uk.ref.typeface["weight-medium"]};
                    font-size: ${dpToRem(16)};
                    line-height: ${dpToRem(24)};
                    letter-spacing: ${dpToRem(0.15)};

                    --icon-size: ${dpToRem(24)};
                `);

                if (!toggled) {
                    classNames.push(css`
                        border-radius: ${dpToRem(56)};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.accelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
                            }
                        }
                    `);

                    break;
                } else {
                    classNames.push(css`
                        border-radius: ${uk.sys.shape.corner.large["default-size"]};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
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
                    font-weight: ${uk.ref.typeface["weight-regular"]};
                    font-size: ${dpToRem(24)};
                    line-height: ${dpToRem(32)};
                    letter-spacing: 0;

                    --icon-size: ${dpToRem(32)};
                `);

                if (!toggled) {
                    classNames.push(css`
                        border-radius: ${dpToRem(96)};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.accelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${uk.sys.shape.corner.large["default-size"]};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
                            }
                        }
                    `);

                    break;
                } else {
                    classNames.push(css`
                        border-radius: ${uk.sys.shape.corner.large["default-size"]};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
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
                    font-weight: ${uk.ref.typeface["weight-regular"]};
                    font-size: ${dpToRem(32)};
                    line-height: ${dpToRem(40)};
                    letter-spacing: 0;

                    --icon-size: ${dpToRem(40)};
                `);

                if (!toggled) {
                    classNames.push(css`
                        border-radius: ${dpToRem(132)};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.accelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${uk.sys.shape.corner.large["default-size"]};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
                            }
                        }
                    `);
                } else {
                    classNames.push(css`
                        border-radius: ${uk.sys.shape.corner["extra-large"]["default-size"]};
                        transition:
                            all ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-color ${uk.sys.motion["duration-200"]}
                                ${uk.sys.motion.easing.standard.decelerate},
                            outline-width 0ms linear;

                        &:not(&[disabled]) {
                            &:active {
                                border-radius: ${dpToRem(40)};
                                transition: border-radius ${uk.sys.motion["duration-50"]}
                                    ${uk.sys.motion.easing.standard.decelerate};
                            }

                            &:focus-visible {
                                outline-color: rgb(${uk.sys.color.outline});
                                outline-width: ${dpToRem(4)};
                            }
                        }
                    `);
                }

                break;
        }

        return classNames;
    }

    return (
        <button
            class={clsx(props.class, getClasses(props.size, props.toggled))}
            disabled={props.disabled}
            onClick={(e) => {
                props.onClick(e);
            }}
            data-toggled={props.toggled}
        >
            {props.leadingIcon && <UKIcon class={iconClass}>{props.leadingIcon}</UKIcon>}
            {props.children}
            {props.trailingIcon && <UKIcon class={iconClass}>{props.trailingIcon}</UKIcon>}
        </button>
    );
};

export default BaseButton;
