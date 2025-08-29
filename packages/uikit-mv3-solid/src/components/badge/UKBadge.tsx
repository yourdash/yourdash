import type { Component, JSX } from "solid-js";
import { css } from "solid-styled-components";
import theme from "../../core/theme.ts";
import dpToRem from "../../core/dp.ts";

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
                        left: calc(100% - ${dpToRem(12)});
                        top: 0;
                        background-color: ${theme.sys.color.error()};
                        height: ${dpToRem(6)};
                        width: ${dpToRem(6)};
                        border-radius: ${theme.sys.shape.corner.full()};
                    `}
                />
            ) : count > 1 ? (
                <div
                    class={css`
                        position: absolute;
                        left: calc(100% - ${dpToRem(12)});
                        top: 0;
                        background-color: ${theme.sys.color.error()};
                        height: ${dpToRem(16)};
                        border-radius: ${theme.sys.shape.corner.full()};

                        color: ${theme.sys.color["on-error"]()};
                        font-family: ${theme.sys.typescale["label-small"].font()};
                        font-size: ${theme.sys.typescale["label-small"].size()};
                        font-kerning: ${theme.sys.typescale["label-small"].tracking()};
                        font-weight: ${theme.sys.typescale["label-small"].weight()};
                        line-height: ${theme.sys.typescale["label-small"]["line-height"]()};
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
