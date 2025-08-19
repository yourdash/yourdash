import type { Component } from "solid-js";
import type { ButtonSize } from "../size.ts";
import type { ButtonShape } from "../shape.ts";
import { css } from "solid-styled-components";
import dpToRem from "../../../core/dp.ts";
import theme from "../../../core/theme.ts";
import clsx from "clsx";

function getClasses(size: ButtonSize, shape: ButtonShape) {
    let classNames: string[] = [];

    classNames.push(css`
        background-color: ${theme.sys.color.primary()};
        color: ${theme.sys.color["on-primary"]()};
        transition: all ${theme.sys.motion["duration-300"]()}
            ${theme.sys.motion.easing.standard.normal()};
    `);

    switch (size) {
        case "xs":
            break;
        case "s":
            classNames.push(css`
                height: ${dpToRem(40)};
                border-width: ${dpToRem(1)};
                padding-left: ${dpToRem(16)};
                padding-right: ${dpToRem(16)};
            `);

            switch (shape) {
                case "round":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.full()};

                        &:focus-visible,
                        &:active {
                            border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
                        }
                    `);
                    break;
                case "square":
                    classNames.push(css`
                        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};

                        &:focus-visible,
                        &:active {
                            border-radius: ${theme.sys.shape.corner.full()};
                        }
                    `);
            }
        case "m":
            break;
        case "l":
            break;
        case "xl":
            break;
    }

    return classNames;
}

const UKFilledButton: Component<{
    children: string;
    onClick: () => void;
    size?: ButtonSize;
    shape?: ButtonShape;
}> = ({ children, onClick, size = "s", shape = "round" }) => {
    return (
        <button class={clsx(getClasses(size, shape))} onClick={onClick}>
            {children}
        </button>
    );
};

export default UKFilledButton;
