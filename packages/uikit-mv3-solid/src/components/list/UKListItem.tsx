import { type Component } from "solid-js";
import UKIcon from "../icon/UKIcon.tsx";
import { css } from "solid-styled-components";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

const containerClassName = css`
    display: flex;
    flex-direction: row;
    gap: ${dpToRem(16)};
    align-items: center;
    padding-left: ${dpToRem(16)};
    padding-right: ${dpToRem(16)};
    background-color: ${uk.sys.color.surface};

    &[data-selected="true"] {
        background-color: ${uk.sys.color["secondary-container"]};
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
`;

const UKListItem: Component<{
    headline: string;
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
}> = (props) => {
    return (
        <div
            class={containerClassName}
            data-lines={props.lines || 2}
            data-selected={props.selected}
            onClick={props.onClick}
        >
            {props.leading?.type === "icon" && <UKIcon>{props.leading.value}</UKIcon>}
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
            <div
                class={css`
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                `}
            >
                <div
                    class={css`
                        color: ${uk.sys.color["on-surface"]};
                    `}
                >
                    {props.headline}
                </div>
                <p
                    class={css`
                        margin: 0;
                        color: ${uk.sys.color["on-surface-variant"]};
                    `}
                >
                    {props.supportingText}
                </p>
            </div>
            {props.followingIcon && (
                <UKIcon
                    class={css`
                        margin-left: auto;
                    `}
                >
                    {props.followingIcon}
                </UKIcon>
            )}
        </div>
    );
};

export default UKListItem;
