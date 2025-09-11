import { css } from "solid-styled-components";
import { type Component, type JSX } from "solid-js";
import type { ButtonSize } from "../button/lib/size.ts";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

// FIXME: this is not correctly implemented according to the MV3 Spec

const UKButtonGroup: Component<{
    children: JSX.Element;
    size: ButtonSize;
    connected?: boolean;
}> = (props) => {
    return (
        <div
            data-size={props.size}
            data-connected={props.connected}
            class={css`
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                & > button:first-child:active {
                    margin-left: calc(calc(calc(var(--padding-left) * 1.15) - calc(var(--padding-left))) * -1);
                }

                & > button:active {
                    --padding-left-override: calc(var(--padding-left) * 1.15);
                    --padding-right-override: calc(var(--padding-left) * 1.15);
                }

                & > button:active + button,
                & > button:has(+ button:active) {
                    --padding-left-override: calc(var(--padding-left) - calc(calc(var(--padding-left) * 1.075) - var(--padding-left)));
                    --padding-right-override: calc(var(--padding-right) - calc(calc(var(--padding-right) * 1.075) - var(--padding-right)));
                }

                & > button:disabled:active {
                    --padding-left-override: unset;
                    --padding-right-override: unset;

                    & + button {
                        --padding-left-override: unset;
                        --padding-right-override: unset;
                    }
                }

                & > button:has(+ button:disabled:active) {
                    --padding-left-override: unset;
                    --padding-right-override: unset;
                }

                &[data-connected="true"] {
                    &[data-size="xs"] {
                        gap: ${dpToRem(2)};
                        height: ${dpToRem(32)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-right-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-left-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="s"] {
                        gap: ${dpToRem(2)};
                        height: ${dpToRem(40)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-right-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-left-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="m"] {
                        gap: ${dpToRem(2)};
                        height: ${dpToRem(56)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-right-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                                border-bottom-left-radius: ${uk.sys.shape.corner.small["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="l"] {
                        gap: ${dpToRem(2)};
                        height: ${dpToRem(96)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${uk.sys.shape.corner.large["default-size"]} !important;
                                border-bottom-right-radius: ${uk.sys.shape.corner.large["default-size"]} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${uk.sys.shape.corner.large["default-size"]} !important;
                                border-bottom-left-radius: ${uk.sys.shape.corner.large["default-size"]} !important;
                            }
                        }
                    }

                    &[data-size="xl"] {
                        gap: ${dpToRem(2)};
                        height: ${dpToRem(136)};

                        & > button {
                            &:not(:last-child):not(:active) {
                                border-top-right-radius: ${dpToRem(20)} !important;
                                border-bottom-right-radius: ${dpToRem(20)} !important;
                            }

                            &:not(:first-child):not(:active) {
                                border-top-left-radius: ${dpToRem(20)} !important;
                                border-bottom-left-radius: ${dpToRem(20)} !important;
                            }
                        }
                    }
                }

                &:not([data-connected="true"]) {
                    &[data-size="xs"] {
                        gap: ${dpToRem(18)};
                        height: ${dpToRem(32)};
                    }

                    &[data-size="s"] {
                        gap: ${dpToRem(12)};
                        height: ${dpToRem(40)};
                    }

                    &[data-size="m"] {
                        gap: ${dpToRem(8)};
                        height: ${dpToRem(56)};
                    }

                    &[data-size="l"] {
                        gap: ${dpToRem(8)};
                        height: ${dpToRem(96)};
                    }

                    &[data-size="xl"] {
                        gap: ${dpToRem(8)};
                        height: ${dpToRem(136)};
                    }
                }
            `}
        >
            {props.children}
        </div>
    );
};

export default UKButtonGroup;
