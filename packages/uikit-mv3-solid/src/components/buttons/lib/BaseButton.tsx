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
    return (
        <button
            class={clsx(
                props.class,
                css`
                    padding-left: var(--padding-left-override, var(--padding-left, 0px));
                    padding-right: var(--padding-right-override, var(--padding-right, 0px));

                    transition:
                        all ${uk.sys.motion["duration-50"]} var(--transition-all),
                        outline-color ${uk.sys.motion["duration-100"]}
                            ${uk.sys.motion.easing.standard.decelerate},
                        outline-width 0ms linear,
                        background-color ${uk.sys.motion["duration-100"]}
                            ${uk.sys.motion.easing.standard.normal},
                        padding-left ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        margin-left ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        padding-right ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        margin-right ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        border-radius var(--border-radius-duration, ${uk.sys.motion["duration-50"]})
                            ${uk.sys.motion.easing.linear};

                    &:focus,
                    &:hover {
                        --border-radius-duration: ${uk.sys.motion["duration-200"]};
                    }

                    &:active {
                        --border-radius-duration: ${uk.sys.motion["duration-50"]};
                    }

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
                            ${uk.sys.motion.easing.standard.normal};
                        content: "";
                        position: absolute;
                        background-color: transparent;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    &[disabled] {
                        cursor: not-allowed;
                    }

                    &[data-size="xs"] {
                        --padding-left: ${dpToRem(12)};
                        --padding-right: ${dpToRem(12)};

                        height: ${dpToRem(32)};
                        border-width: ${dpToRem(1)};
                        gap: ${dpToRem(8)};
                        font-weight: ${uk.ref.typeface["weight-medium"]};
                        font-size: ${dpToRem(14)};
                        line-height: ${dpToRem(20)};
                        letter-spacing: ${dpToRem(0.1)};

                        --icon-size: ${dpToRem(20)};

                        &[data-toggled="true"] {
                            border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.full};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }

                        &:not([data-toggled="true"]) {
                            border-radius: ${dpToRem(32)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.small["default-size"]};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }
                    }

                    &[data-size="s"] {
                        --padding-left: ${dpToRem(16)};
                        --padding-right: ${dpToRem(16)};

                        height: ${dpToRem(40)};
                        border-width: ${dpToRem(1)};
                        gap: ${dpToRem(8)};
                        font-weight: ${uk.ref.typeface["weight-medium"]};
                        font-size: ${dpToRem(14)};
                        line-height: ${dpToRem(20)};
                        letter-spacing: ${dpToRem(0.1)};

                        --icon-size: ${dpToRem(20)};

                        &[data-toggled="true"] {
                            border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }

                        &:not([data-toggled="true"]) {
                            border-radius: ${dpToRem(40)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }
                    }

                    &[data-size="m"] {
                        --padding-left: ${dpToRem(24)};
                        --padding-right: ${dpToRem(24)};

                        height: ${dpToRem(56)};
                        border-width: ${dpToRem(1)};
                        gap: ${dpToRem(8)};
                        font-weight: ${uk.ref.typeface["weight-medium"]};
                        font-size: ${dpToRem(16)};
                        line-height: ${dpToRem(24)};
                        letter-spacing: ${dpToRem(0.15)};

                        --icon-size: ${dpToRem(24)};

                        &[data-toggled="true"] {
                            border-radius: ${uk.sys.shape.corner.large["default-size"]};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }

                        &:not([data-toggled="true"]) {
                            border-radius: ${dpToRem(56)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.medium["default-size"]};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }
                    }

                    &[data-size="l"] {
                        --padding-left: ${dpToRem(48)};
                        --padding-right: ${dpToRem(48)};

                        height: ${dpToRem(96)};
                        border-width: ${dpToRem(2)};
                        gap: ${dpToRem(12)};
                        font-weight: ${uk.ref.typeface["weight-regular"]};
                        font-size: ${dpToRem(24)};
                        line-height: ${dpToRem(32)};
                        letter-spacing: 0;

                        --icon-size: ${dpToRem(32)};

                        &[data-toggled="true"] {
                            border-radius: ${uk.sys.shape.corner.large["default-size"]};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }

                        &:not([data-toggled="true"]) {
                            border-radius: ${dpToRem(96)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.large["default-size"]};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }
                    }

                    &[data-size="xl"] {
                        --padding-left: ${dpToRem(64)};
                        --padding-right: ${dpToRem(64)};

                        height: ${dpToRem(132)};
                        border-width: ${dpToRem(3)};
                        gap: ${dpToRem(16)};
                        font-weight: ${uk.ref.typeface["weight-regular"]};
                        font-size: ${dpToRem(32)};
                        line-height: ${dpToRem(40)};
                        letter-spacing: 0;

                        --icon-size: ${dpToRem(40)};

                        &[data-toggled="true"] {
                            border-radius: ${uk.sys.shape.corner["extra-large"]["default-size"]};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }

                        &:not([data-toggled="true"]) {
                            border-radius: ${dpToRem(132)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.large["default-size"]};
                                }

                                &:focus-visible {
                                    outline-color: rgb(${uk.sys.color.outline});
                                    outline-width: ${dpToRem(4)};
                                }
                            }
                        }
                    }
                `,
            )}
            disabled={props.disabled}
            onClick={(e) => {
                props.onClick(e);
            }}
            data-size={props.size}
            data-toggled={props.toggled}
        >
            {props.leadingIcon && <UKIcon class={iconClass}>{props.leadingIcon}</UKIcon>}
            {props.children}
            {props.trailingIcon && <UKIcon class={iconClass}>{props.trailingIcon}</UKIcon>}
        </button>
    );
};

export default BaseButton;
