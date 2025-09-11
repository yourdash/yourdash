import { createSignal, type Component, type JSX } from "solid-js";
import type { ButtonSize } from "./lib/size.ts";
import clsx from "clsx";
import dpToRem from "../../core/dp.ts";
import UKIcon from "../icon/UKIcon.tsx";
import { css } from "solid-styled-components";
import { uk } from "../../core/design/tokens.ts";
import type { ButtonShape } from "./lib/shape.ts";
import type { ButtonColor } from "./lib/color.ts";

const iconClass = css`
    font-size: var(--icon-size);
`;

const UKButton: Component<{
    children: JSX.Element;
    class?: string;
    disabled?: boolean;
    size?: ButtonSize;
    color?: ButtonColor;
    shape?: ButtonShape;
    type?: "normal" | "toggle";
    onClick: (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    leadingIcon?: string;
    trailingIcon?: string;
}> = (props) => {
    const [isSelected, setIsSelected] = createSignal(false);

    if (props.color === "standard" && props.type === "toggle") {
        alert("You cannot have a standard color button be toggleable");
    }

    return (
        <button
            disabled={props.disabled || false}
            data-selected={isSelected()}
            data-toggleable={props.type === "toggle" || false}
            data-size={props.size || "s"}
            data-shape={isSelected() ? ((props.shape || "round") === "round" ? "square" : "round") : props.shape || "round"}
            data-color={props.color || "filled"}
            onClick={(e) => {
                if (props.type === "toggle") {
                    setIsSelected(!isSelected());
                    props.onClick(e);
                } else {
                    props.onClick(e);
                }
            }}
            class={clsx(
                props.class,
                css`
                    padding-left: var(--padding-left-override, var(--padding-left, 0px));
                    padding-right: var(--padding-right-override, var(--padding-right, 0px));

                    transition:
                        all ${uk.sys.motion["duration-50"]} var(--transition-all, linear),
                        outline-color ${uk.sys.motion["duration-100"]} ${uk.sys.motion.easing.standard.decelerate},
                        outline-width 0ms linear,
                        background-color ${uk.sys.motion["duration-100"]} ${uk.sys.motion.easing.standard.normal},
                        color ${uk.sys.motion["duration-100"]} ${uk.sys.motion.easing.standard.normal},
                        padding-left ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        margin-left ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        padding-right ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        margin-right ${uk.sys.motion["duration-50"]} ${uk.sys.motion.easing.linear},
                        border-radius var(--border-radius-duration, ${uk.sys.motion["duration-50"]}) ${uk.sys.motion.easing.linear};

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
                        transition: background-color ${uk.sys.motion["duration-100"]} ${uk.sys.motion.easing.standard.normal};
                        content: "";
                        position: absolute;
                        background-color: transparent;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }

                    &:focus-visible {
                        outline-width: ${uk.sys.state["focus-indicator"].thickness};
                        outline-offset: ${uk.sys.state["focus-indicator"]["outer-offset"]};
                        outline-color: rgb(${uk.sys.color.secondary});
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

                        &[data-shape="square"] {
                            border-radius: ${uk.sys.shape.corner.medium};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.full};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${dpToRem(32)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.small};
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

                        &[data-shape="square"] {
                            border-radius: ${uk.sys.shape.corner.medium};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${dpToRem(40)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.medium};
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

                        &[data-shape="square"] {
                            border-radius: ${uk.sys.shape.corner.large.size};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${dpToRem(56)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.medium};
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

                        &[data-shape="square"] {
                            border-radius: ${uk.sys.shape.corner.large.size};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${dpToRem(96)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.large.size};
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

                        &[data-shape="square"] {
                            border-radius: ${uk.sys.shape.corner["extra-large"].size};
                            --transition-all: ${uk.sys.motion.easing.standard.accelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${dpToRem(40)};
                                }
                            }
                        }

                        &:not([data-shape="square"]) {
                            border-radius: ${dpToRem(132)};
                            --transition-all: ${uk.sys.motion.easing.standard.decelerate};

                            &:not(&[disabled]) {
                                &:active {
                                    border-radius: ${uk.sys.shape.corner.large.size};
                                }
                            }
                        }
                    }

                    &[data-color="filled"] {
                        background-color: rgb(${uk.sys.color.primary});
                        color: rgb(${uk.sys.color["on-primary"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${uk.sys.color["on-primary"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(${uk.sys.color["on-primary"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                            color: rgb(${uk.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }

                        &[data-toggleable="true"] {
                            background: rgb(${uk.sys.color["surface-container"]});
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &[data-selected="true"] {
                                background: rgb(${uk.sys.color.primary});
                                color: rgb(${uk.sys.color["on-primary"]});
                            }
                        }
                    }

                    &[data-color="outlined"] {
                        background-color: transparent;
                        color: rgb(${uk.sys.color["on-surface-variant"]});
                        border-style: solid;
                        border-color: rgb(${uk.sys.color["outline-variant"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(
                                    ${uk.sys.color["on-secondary-container"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                            color: rgb(${uk.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }

                        &[data-toggleable="true"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &[data-selected="true"] {
                                background: rgb(${uk.sys.color["inverse-surface"]});
                                color: rgb(${uk.sys.color["inverse-on-surface"]});
                            }
                        }
                    }

                    &[data-color="elevated"] {
                        border: none;
                        box-shadow: 0 ${dpToRem(1)} ${dpToRem(2)} ${uk.sys.color.shadow};

                        &:not([disabled]) {
                            &:active,
                            &:focus-visible {
                                box-shadow: 0 ${dpToRem(2)} ${dpToRem(6)} ${uk.sys.color.shadow};
                            }
                        }
                    }

                    &[data-color="standard"] {
                        background-color: transparent;
                        color: rgb(${uk.sys.color["primary"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${uk.sys.color["primary"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(${uk.sys.color["primary"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                            color: rgb(${uk.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }
                    }

                    &[data-color="tonal"] {
                        background-color: rgb(${uk.sys.color["secondary-container"]});
                        color: rgb(${uk.sys.color["on-secondary-container"]});

                        &:hover {
                            &::after {
                                background-color: rgb(${uk.sys.color["on-secondary"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &:active {
                            &::after {
                                background-color: rgb(
                                    ${uk.sys.color["on-secondary-container"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[disabled] {
                            background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                            color: rgb(${uk.sys.color["on-surface"]}, 0.38);

                            &::after {
                                background-color: transparent;
                            }
                        }

                        &[data-toggleable="true"] {
                            background: rgb(${uk.sys.color["secondary-container"]});
                            color: rgb(${uk.sys.color["on-secondary-container"]});

                            &[data-selected="true"] {
                                background: rgb(${uk.sys.color.secondary});
                                color: rgb(${uk.sys.color["on-secondary"]});
                            }
                        }
                    }
                `,
            )}
        >
            {props.leadingIcon && <UKIcon class={iconClass}>{props.leadingIcon}</UKIcon>}
            {props.children || "No Label Provided"}
            {props.trailingIcon && <UKIcon class={iconClass}>{props.trailingIcon}</UKIcon>}
        </button>
    );
};

export default UKButton;
