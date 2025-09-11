import { createSignal, type Component } from "solid-js";
import { css } from "solid-styled-components";
import UKIcon from "../icon/UKIcon";
import type { IconButtonSize } from "./lib/size";
import type { IconButtonShape } from "./lib/shape";
import type { IconButtonColor } from "./lib/color";
import type { IconButtonWidth } from "./lib/width";
import { uk } from "../../core/design/tokens";
import dpToRem from "../../core/dp";

// TODO: implement smooth animations as is done with UKButton

const UKIconButton: Component<{
    icon: string;
    alt: string;
    onClick: (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    width?: IconButtonWidth;
    shape?: IconButtonShape;
    color?: IconButtonColor;
    size?: IconButtonSize;
    type?: "normal" | "toggle";
    disabled?: boolean;
}> = (props) => {
    const [isSelected, setIsSelected] = createSignal(false);

    return (
        <button
            data-width={props.width || "default"}
            data-shape={props.shape || "round"}
            data-size={props.size || "s"}
            data-type={props.type || "normal"}
            data-color={props.color || "filled"}
            data-selected={isSelected()}
            disabled={props.disabled || false}
            onClick={(e) => {
                if (props.type === "toggle") {
                    setIsSelected(!isSelected());
                    props.onClick(e);
                } else {
                    props.onClick(e);
                }
            }}
            class={css`
                background-color: rgb(${uk.sys.color.primary});
                color: rgb(${uk.sys.color["on-primary"]});
                height: ${dpToRem(40)};
                border: none;
                --icon-size: ${dpToRem(24)};
                overflow: hidden;
                position: relative;
                outline-style: solid;
                outline-offset: ${dpToRem(2)};
                outline-width: 0;
                outline-color: transparent;

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

                &::before {
                    content: "";
                    position: absolute;
                    transition: background-color ${uk.sys.motion["duration-100"]} ${uk.sys.motion.easing.standard.normal};
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

                &:focus,
                &:hover {
                    --border-radius-duration: ${uk.sys.motion["duration-200"]};
                }

                &:active {
                    --border-radius-duration: ${uk.sys.motion["duration-50"]};
                }

                &:disabled {
                    background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                    color: rgb(${uk.sys.color["on-surface"]}, 0.38);
                    cursor: not-allowed;
                }

                &[data-size="xs"] {
                    height: ${dpToRem(32)};
                    border-width: ${dpToRem(1)};
                    --icon-size: ${dpToRem(20)};
                    --outline-width: ${dpToRem(1)};

                    &[data-width="narrow"] {
                        --padding-left: ${dpToRem(4)};
                        --padding-right: ${dpToRem(4)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${dpToRem(6)};
                        --padding-right: ${dpToRem(6)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${dpToRem(10)};
                        --padding-right: ${dpToRem(10)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${dpToRem(24)};

                        &[data-selected="true"] {
                            border-radius: ${uk.sys.shape.corner.medium};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${uk.sys.shape.corner.medium};

                        &[data-selected="true"] {
                            border-radius: ${dpToRem(24)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${uk.sys.shape.corner.small};
                    }
                }

                &[data-size="s"] {
                    height: ${dpToRem(40)};
                    border-width: ${dpToRem(1)};
                    --icon-size: ${dpToRem(24)};
                    --outline-width: ${dpToRem(1)};

                    &[data-width="narrow"] {
                        --padding-left: ${dpToRem(4)};
                        --padding-right: ${dpToRem(4)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${dpToRem(8)};
                        --padding-right: ${dpToRem(8)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${dpToRem(14)};
                        --padding-right: ${dpToRem(14)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${dpToRem(40)};

                        &[data-selected="true"] {
                            border-radius: ${uk.sys.shape.corner.medium};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${uk.sys.shape.corner.medium};

                        &[data-selected="true"] {
                            border-radius: ${dpToRem(40)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${uk.sys.shape.corner.small};
                    }
                }

                &[data-size="m"] {
                    height: ${dpToRem(56)};
                    border-width: ${dpToRem(1)};
                    --icon-size: ${dpToRem(24)};
                    --outline-width: ${dpToRem(1)};

                    &[data-width="narrow"] {
                        --padding-left: ${dpToRem(12)};
                        --padding-right: ${dpToRem(12)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${dpToRem(16)};
                        --padding-right: ${dpToRem(16)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${dpToRem(24)};
                        --padding-right: ${dpToRem(24)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${dpToRem(56)};

                        &[data-selected="true"] {
                            border-radius: ${uk.sys.shape.corner.large.size};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${uk.sys.shape.corner.large.size};

                        &[data-selected="true"] {
                            border-radius: ${dpToRem(56)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${uk.sys.shape.corner.medium};
                    }
                }

                &[data-size="l"] {
                    height: ${dpToRem(96)};
                    border-width: ${dpToRem(2)};
                    --icon-size: ${dpToRem(32)};
                    --outline-width: ${dpToRem(2)};

                    &[data-width="narrow"] {
                        --padding-left: ${dpToRem(16)};
                        --padding-right: ${dpToRem(16)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${dpToRem(32)};
                        --padding-right: ${dpToRem(32)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${dpToRem(48)};
                        --padding-right: ${dpToRem(48)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${dpToRem(96)};

                        &[data-selected="true"] {
                            border-radius: ${uk.sys.shape.corner["extra-large"].size};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${uk.sys.shape.corner["extra-large"].size};

                        &[data-selected="true"] {
                            border-radius: ${dpToRem(96)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${uk.sys.shape.corner.large.size};
                    }
                }

                &[data-size="xl"] {
                    height: ${dpToRem(136)};
                    border-width: ${dpToRem(3)};
                    --icon-size: ${dpToRem(40)};
                    --outline-width: ${dpToRem(3)};

                    &[data-width="narrow"] {
                        --padding-left: ${dpToRem(32)};
                        --padding-right: ${dpToRem(32)};
                    }

                    &[data-width="default"] {
                        --padding-left: ${dpToRem(48)};
                        --padding-right: ${dpToRem(48)};
                    }

                    &[data-width="wide"] {
                        --padding-left: ${dpToRem(72)};
                        --padding-right: ${dpToRem(72)};
                    }

                    &[data-shape="round"] {
                        border-radius: ${dpToRem(136)};

                        &[data-selected="true"] {
                            border-radius: ${uk.sys.shape.corner["extra-large"].size};
                        }
                    }

                    &[data-shape="square"] {
                        border-radius: ${uk.sys.shape.corner["extra-large"].size};

                        &[data-selected="true"] {
                            border-radius: ${dpToRem(136)};
                        }
                    }

                    &:active:not(:disabled) {
                        border-radius: ${uk.sys.shape.corner.large.size};
                    }
                }

                &[data-color="filled"] {
                    background-color: rgb(${uk.sys.color.primary});
                    color: rgb(${uk.sys.color["on-primary"]});

                    &[data-type="toggle"] {
                        background-color: rgb(${uk.sys.color["surface-container"]});
                        color: rgb(${uk.sys.color["on-surface-variant"]});
                    }

                    &[data-selected="true"] {
                        background-color: rgb(${uk.sys.color.primary});
                        color: rgb(${uk.sys.color["on-primary"]});
                    }

                    &:focus-visible {
                        color: rgb(${uk.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-primary"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["on-primary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${uk.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-primary"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["on-primary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${uk.sys.color["on-primary"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-primary"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-surface-variant"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["on-primary"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-surface-variant"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }
                    }

                    &:disabled {
                        background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                        color: rgb(${uk.sys.color["on-surface"]}, 0.38);
                    }
                }

                &[data-color="tonal"] {
                    background-color: rgb(${uk.sys.color["secondary-container"]});
                    color: rgb(${uk.sys.color["on-secondary-container"]});

                    &[data-type="toggle"] {
                        background-color: rgb(${uk.sys.color["secondary-container"]});
                        color: rgb(${uk.sys.color["on-secondary-container"]});
                    }

                    &[data-selected="true"] {
                        background-color: rgb(${uk.sys.color.secondary});
                        color: rgb(${uk.sys.color["on-secondary"]});
                    }

                    &:focus-visible {
                        color: rgb(${uk.sys.color["on-secondary-container"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-secondary-container"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-secondary-container"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-secondary-container"]},
                                    ${uk.sys.state.focus["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["on-secondary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-secondary"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${uk.sys.color["on-secondary-container"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-secondary-container"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-secondary-container"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-secondary-container"]},
                                    ${uk.sys.state.hover["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["on-secondary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-secondary"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${uk.sys.color["on-secondary-container"]});

                        &::before {
                            background-color: rgb(
                                ${uk.sys.color["on-secondary-container"]},
                                ${uk.sys.state.pressed["state-layer-opacity"]}
                            );
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-secondary-container"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["on-secondary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-secondary"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                            }
                        }
                    }

                    &:disabled {
                        background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                        color: rgb(${uk.sys.color["on-surface"]}, 0.38);
                    }
                }

                &[data-color="outlined"] {
                    background-color: transparent;
                    color: rgb(${uk.sys.color["on-surface-variant"]});
                    border-style: solid;
                    border-color: rgb(${uk.sys.color["outline-variant"]});

                    &[data-type="toggle"] {
                        color: rgb(${uk.sys.color["on-surface-variant"]});
                    }

                    &[data-selected="true"] {
                        background-color: rgb(${uk.sys.color["inverse-surface"]});
                        color: rgb(${uk.sys.color["inverse-on-surface"]});
                    }

                    &:focus-visible {
                        color: rgb(${uk.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-secondary-container"]},
                                    ${uk.sys.state.focus["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["inverse-on-surface"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["inverse-on-surface"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${uk.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["inverse-on-surface"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["inverse-on-surface"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${uk.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-surface-variant"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["inverse-on-surface"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["inverse-on-surface"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }
                    }

                    &:disabled {
                        background-color: rgb(${uk.sys.color["on-surface"]}, 0.1);
                        color: rgb(${uk.sys.color["on-surface"]}, 0.38);
                    }
                }

                &[data-color="standard"] {
                    background-color: transparent;
                    color: rgb(${uk.sys.color["on-surface-variant"]});

                    &[data-type="toggle"] {
                        color: rgb(${uk.sys.color["on-surface-variant"]});
                    }

                    &[data-selected="true"] {
                        color: rgb(${uk.sys.color["primary"]});
                    }

                    &:focus-visible {
                        color: rgb(${uk.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["primary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["primary"]}, ${uk.sys.state.focus["state-layer-opacity"]});
                            }
                        }
                    }

                    &:hover {
                        color: rgb(${uk.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color.primary});

                            &::before {
                                background-color: rgb(${uk.sys.color.primary}, ${uk.sys.state.hover["state-layer-opacity"]});
                            }
                        }
                    }

                    &:active {
                        color: rgb(${uk.sys.color["on-surface-variant"]});

                        &::before {
                            background-color: rgb(${uk.sys.color["on-surface-variant"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                        }

                        &[data-type="toggle"] {
                            color: rgb(${uk.sys.color["on-surface-variant"]});

                            &::before {
                                background-color: rgb(
                                    ${uk.sys.color["on-surface-variant"]},
                                    ${uk.sys.state.pressed["state-layer-opacity"]}
                                );
                            }
                        }

                        &[data-selected="true"] {
                            color: rgb(${uk.sys.color["primary"]});

                            &::before {
                                background-color: rgb(${uk.sys.color["primary"]}, ${uk.sys.state.pressed["state-layer-opacity"]});
                            }
                        }
                    }

                    &:disabled {
                        color: rgb(${uk.sys.color["on-surface"]}, 0.38);
                    }
                }
            `}
        >
            <UKIcon>{props.icon}</UKIcon>
        </button>
    );
};

export default UKIconButton;
