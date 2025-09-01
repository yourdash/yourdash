import type { Component } from "solid-js";
import { css } from "solid-styled-components";
import { DividerDirection } from "./lib/direction.ts";
import clsx from "clsx";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

function getClasses(direction: DividerDirection, width: "inset" | "middle-inset" | "full") {
    let classNames: string[] = [];

    classNames.push(css`
        background-color: rgb(${uk.sys.color["outline-variant"]});
        --thickness: ${dpToRem(1)};
    `);

    switch (direction) {
        case DividerDirection.horizontal:
            classNames.push(css`
                height: var(--thickness);
            `);

            switch (width) {
                case "full":
                    classNames.push(css`
                        width: 100%;
                    `);
                    break;
                case "inset":
                    classNames.push(css`
                        width: calc(100% - ${dpToRem(16)});
                        margin-left: ${dpToRem(16)};
                    `);
                    break;

                case "middle-inset":
                    classNames.push(css`
                        width: calc(100% - ${dpToRem(32)});
                        margin-left: ${dpToRem(16)};
                        margin-right: ${dpToRem(16)};
                    `);
                    break;
            }

            break;
        case DividerDirection.vertical:
            classNames.push(css`
                width: var(--thickness);
            `);

            switch (width) {
                case "middle-inset":
                    classNames.push(css`
                        height: calc(100% - ${dpToRem(32)});
                        margin-top: ${dpToRem(16)};
                        margin-bottom: ${dpToRem(16)};
                    `);
                    break;
                case "full":
                    classNames.push(css`
                        width: var(--thickness);
                        height: 100%;
                    `);
                    break;
            }

            break;
    }

    return classNames;
}

const UKDivider: Component<{
    direction: DividerDirection;
    width?: "inset" | "middle-inset" | "full";
}> = (props) => {
    if (props.width === "inset" && props.direction === DividerDirection.vertical) {
        console.warn("A divider cannot be both vertical and inset");
    }

    return <div class={clsx(getClasses(props.direction, props.width || "full"))} />;
};

export default UKDivider;
