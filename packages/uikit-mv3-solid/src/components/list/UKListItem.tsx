import { type Component } from "solid-js";
import UKIcon from "../icon/UKIcon.tsx";
import { css } from "solid-styled-components";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

const body = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const labelText = css`
    color: ${uk.sys.color["on-surface"]};
    font-family: ${uk.sys.typescale["body-large"].font};
    line-height: ${uk.sys.typescale["body-large"]["line-height"]};
    font-size: ${uk.sys.typescale["body-large"].size};
    font-kerning: ${uk.sys.typescale["body-large"].tracking};
    font-weight: ${uk.sys.typescale["body-large"].weight};
`;

const supportingText = css`
    margin: 0;
    color: ${uk.sys.color["on-surface-variant"]};
    font-family: ${uk.sys.typescale["body-medium"].font};
    line-height: ${uk.sys.typescale["body-medium"]["line-height"]};
    font-size: ${uk.sys.typescale["body-medium"].size};
    font-kerning: ${uk.sys.typescale["body-medium"].tracking};
    font-weight: ${uk.sys.typescale["body-medium"].weight};
`;

const leadingImage = css`
    width: ${dpToRem(56)};
    height: ${dpToRem(56)};
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`;

const leadingIcon = css`
    color: rgb(${uk.sys.color["on-surface-variant"]});
    font-size: ${dpToRem(24)};
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`;

const leadingAvatar = css`
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
    background-color: rgb(${uk.sys.color["primary-container"]});
    border-radius: ${uk.sys.shape.corner.full};
    position: relative;
    height: ${dpToRem(40)};
    width: ${dpToRem(40)};
    z-index: 0;

    & > img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    & > span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgb(${uk.sys.color["on-primary-container"]});
        z-index: 0;

        font-family: ${uk.sys.typescale["title-medium"].font};
        font-weight: ${uk.sys.typescale["title-medium"].weight};
        font-size: ${uk.sys.typescale["title-medium"].size};
        line-height: ${uk.sys.typescale["title-medium"]["line-height"]};
        font-kerning: ${uk.sys.typescale["title-medium"].tracking};
    }
`;

const trailingIcon = css`
    color: rgb(${uk.sys.color["on-surface-variant"]});
    margin-left: auto;
    font-size: ${dpToRem(24)};
    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`;

const trailingText = css`
    color: rgb(${uk.sys.color["on-surface-variant"]});
    margin-left: auto;

    font-family: ${uk.sys.typescale["label-small"].font};
    font-weight: ${uk.sys.typescale["label-small"].weight};
    font-size: ${uk.sys.typescale["label-small"].size};
    line-height: ${uk.sys.typescale["label-small"]["line-height"]};
    font-kerning: ${uk.sys.typescale["label-small"].tracking};

    overflow: hidden;
    user-select: none;
    -webkit-user-drag: none;
`;

const containerClassName = css`
    display: flex;
    flex-direction: row;
    gap: ${dpToRem(16)};
    align-items: center;
    padding-left: ${dpToRem(16)};
    padding-right: ${dpToRem(16)};
    background-color: rgb(${uk.sys.color.surface});
    position: relative;

    outline-color: transparent;
    outline-style: solid;
    outline-width: ${dpToRem(3)};
    outline-offset: ${dpToRem(3)};
    transition: outline-color ${uk.sys.motion["duration-200"]}
        ${uk.sys.motion.easing.standard.decelerate};

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

    &:hover {
        &::after {
            transition: background-color ${uk.sys.motion["duration-100"]}
                ${uk.sys.motion.easing.standard.accelerate};

            background: rgb(
                ${uk.sys.color["on-surface"]},
                ${uk.sys.state.hover["state-layer-opacity"]}
            );
        }

        .${labelText} {
            color: rgb(${uk.sys.color["on-surface"]});
        }

        .${leadingIcon} {
            color: rgb(${uk.sys.color["on-surface-variant"]});
        }

        .${trailingIcon} {
            color: rgb(${uk.sys.color["on-surface-variant"]});
        }
    }

    &:active {
        &::after {
            background: rgb(
                ${uk.sys.color["on-surface"]},
                ${uk.sys.state.pressed["state-layer-opacity"]}
            );
        }
    }

    &[data-selected="true"] {
        background-color: rgb(${uk.sys.color["secondary-container"]});

        &:hover {
            .${labelText} {
                color: rgb(${uk.sys.color["on-secondary-container"]});
            }

            .${leadingIcon} {
                color: rgb(${uk.sys.color["on-surface"]});
            }

            .${trailingIcon} {
                color: rgb(${uk.sys.color["on-surface"]});
            }
        }
    }

    &:focus-visible {
        outline-color: rgb(${uk.sys.color.secondary});
    }

    &[data-lines="1"] {
        padding-top: ${dpToRem(8)};
        padding-bottom: ${dpToRem(8)};
        height: ${dpToRem(56)};
    }

    &[data-lines="2"] {
        padding-top: ${dpToRem(8)};
        padding-bottom: ${dpToRem(8)};
        height: ${dpToRem(72)};
    }

    &[data-lines="3"] {
        padding-top: ${dpToRem(12)};
        padding-bottom: ${dpToRem(12)};
        height: ${dpToRem(88)};
    }

    &[data-divider="true"] {
        &::before {
            content: "";
            position: absolute;
            top: calc(100% + ${dpToRem(8)});
            left: 0;
            background-color: rgb(${uk.sys.color.outline});
            height: ${dpToRem(1)};
            width: 100%;
        }

        margin-bottom: ${dpToRem(16)};
    }

    &[data-can-select="true"] {
        .${trailingIcon} {
            color: rgb(${uk.sys.color["on-surface"]});
        }
    }

    &[data-selected="true"] {
        .${labelText} {
            color: rgb(${uk.sys.color["on-secondary-container"]});
        }

        .${leadingIcon} {
            color: rgb(${uk.sys.color["on-surface"]});
        }

        .${trailingIcon} {
            color: rgb(${uk.sys.color.primary});
        }

        .${trailingText} {
            color: rgb(${uk.sys.color["on-surface"]});
        }

        .${supportingText} {
            color: rgb(${uk.sys.color["on-surface"]});
        }
    }

    &[data-disabled="true"] {
        cursor: not-allowed;

        .${labelText} {
            color: rgb(${uk.sys.color["on-surface"]}, 0.38);
        }

        .${supportingText} {
            color: rgb(${uk.sys.color["on-surface"]}, 0.38);
        }

        .${leadingIcon} {
            color: rgb(${uk.sys.color["on-surface"]}, 0.38);
        }

        .${trailingIcon} {
            color: rgb(${uk.sys.color["on-surface"]}, 0.38);
        }

        &::after {
            background-color: rgb(
                ${uk.sys.color["on-surface"]},
                ${uk.sys.state.focus["state-layer-opacity"]}
            );
        }
    }
`;

const UKListItem: Component<{
    labelText: string;
    supportingText: string;
    trailing?: {
        type: "icon" | "text";
        value: string;
    };
    lines?: 1 | 2 | 3;
    leading?: {
        type: "image" | "avatar" | "icon" | "video" | "large-image";
        value: string;
        alt?: string;
    };
    onClick: () => void;
    selected?: boolean;
    canSelect?: boolean;
    divider?: boolean;
    disabled?: boolean;
}> = (props) => {
    return (
        <div
            class={containerClassName}
            data-disabled={props.disabled}
            data-lines={props.lines || 2}
            data-selected={props.selected}
            data-can-select={props.canSelect}
            data-divider={props.divider}
            onClick={props.onClick}
            tabindex={props.disabled ? undefined : 0}
        >
            {props.leading?.type === "icon" && (
                <UKIcon class={leadingIcon}>{props.leading.value}</UKIcon>
            )}
            {props.leading?.type === "image" && (
                <img class={leadingImage} src={props.leading.value} alt={props.leading.alt || ""} />
            )}
            {props.leading?.type === "avatar" && (
                <div class={leadingAvatar}>
                    <span>{(props.leading.alt || "uk").slice(0, 2)}</span>
                    <img src={props.leading.value} alt={props.leading.alt || ""} />
                </div>
            )}
            <div class={body}>
                <div class={labelText}>{props.labelText}</div>
                <p class={supportingText}>{props.supportingText}</p>
            </div>
            {props.trailing?.type === "icon" && (
                <UKIcon class={trailingIcon}>{props.trailing.value}</UKIcon>
            )}
            {props.trailing?.type === "text" && (
                <span class={trailingText}>{props.trailing.value}</span>
            )}
        </div>
    );
};

export default UKListItem;
