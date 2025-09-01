import type { Component, JSX } from "solid-js";
import { css } from "solid-styled-components";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

const UKBadge: Component<{ children: JSX.Element; count: number }> = ({ children, count }) => {
    return (
        <div
            class={css`
                position: relative;
                width: max-content;
                height: max-content;
            `}
        >
            {children}
            {count === 1 ? (
                <div
                    class={css`
                        position: absolute;
                        left: calc(100% - ${dpToRem(3)});
                        top: -${dpToRem(3)};
                        background-color: rgb(${uk.sys.color.error});
                        height: ${dpToRem(6)};
                        width: ${dpToRem(6)};
                        border-radius: ${uk.sys.shape.corner.full};
                    `}
                />
            ) : count > 1 ? (
                <div
                    class={css`
                        position: absolute;
                        left: calc(100% - ${dpToRem(12)});
                        top: -${dpToRem(8)};
                        background-color: rgb(${uk.sys.color.error});
                        height: ${dpToRem(16)};
                        border-radius: ${uk.sys.shape.corner.full};

                        color: rgb(${uk.sys.color["on-error"]});
                        font-family: ${uk.sys.typescale["label-small"].font};
                        font-size: ${uk.sys.typescale["label-small"].size};
                        font-kerning: ${uk.sys.typescale["label-small"].tracking};
                        font-weight: ${uk.sys.typescale["label-small"].weight};
                        line-height: ${uk.sys.typescale["label-small"]["line-height"]};
                        padding-left: ${dpToRem(4)};
                        padding-right: ${dpToRem(4)};
                    `}
                >
                    {Math.min(count, 999) === 999 ? `999+` : count}
                </div>
            ) : null}
        </div>
    );
};

export default UKBadge;
