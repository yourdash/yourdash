import { type Component, type JSX } from "solid-js";
import BaseCard from "./lib/BaseCard.tsx";
import clsx from "clsx";
import { css } from "solid-styled-components";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

function getClass() {
    let classList: string[] = [];

    classList.push(css`
        background: rgb(${uk.sys.color["surface-container-highest"]});
        color: rgb(${uk.sys.color["on-surface"]});
        box-shadow: 0 0 ${dpToRem(1)} rgb(${uk.sys.color.shadow});
        border-radius: ${uk.sys.shape.corner.medium["default-size"]};
    `);

    return classList;
}

const UKFilledCard: Component<{ children: JSX.Element }> = (props) => {
    return <BaseCard class={clsx(getClass())}>{props.children}</BaseCard>;
};

export default UKFilledCard;
