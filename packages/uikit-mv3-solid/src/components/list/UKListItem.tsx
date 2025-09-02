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

const leadingIcon = css`
    color: rgb(${uk.sys.color["on-surface-variant"]});
    font-size: ${dpToRem(24)};
`;

const trailingIcon = css`
    color: rgb(${uk.sys.color["on-surface-variant"]});
    margin-left: auto;
    font-size: ${dpToRem(24)};
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

    &[data-selected="true"] {
        background-color: rgb(${uk.sys.color["secondary-container"]});
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
        &::after {
            content: "";
            position: absolute;
            top: calc(100% + ${dpToRem(16)});
            background-color: rgb(${uk.sys.color.outline});
            height: ${dpToRem(1)};
        }

        margin-bottom: ${dpToRem(32)};
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

        .${supportingText} {
            color: rgb(${uk.sys.color["on-surface"]});
        }
    }
`;

const UKListItem: Component<{
    labelText: string;
    supportingText: string;
    followingIcon?: string;
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
}> = (props) => {
    return (
        <div
            class={containerClassName}
            data-lines={props.lines || 2}
            data-selected={props.selected}
            data-can-select={props.canSelect}
            data-divider={props.divider}
            onClick={props.onClick}
        >
            {props.leading?.type === "icon" && (
                <UKIcon class={leadingIcon}>{props.leading.value}</UKIcon>
            )}
            {props.leading?.type === "image" && (
                <img src={props.leading.value} alt={props.leading.alt || ""} />
            )}
            {props.leading?.type === "avatar" && (
                <img src={props.leading.value} alt={props.leading.alt || ""} />
            )}
            {props.leading?.type === "large-image" && (
                <img src={props.leading.value} alt={props.leading.alt || ""} />
            )}
            {props.leading?.type === "video" && (
                <img src={props.leading.value} alt={props.leading.alt || ""} />
            )}
            <div class={body}>
                <div class={labelText}>{props.labelText}</div>
                <p class={supportingText}>{props.supportingText}</p>
            </div>
            {props.followingIcon && <UKIcon class={trailingIcon}>{props.followingIcon}</UKIcon>}
        </div>
    );
};

export default UKListItem;
