import { type Component, type JSX } from "solid-js";
import BaseCard from "./lib/BaseCard.tsx";
import clsx from "clsx";
import { css } from "solid-styled-components";
import theme from "../../core/theme.ts";
import dpToRem from "../../core/dp.ts";

function getClass() {
    let classList: string[] = [];

    classList.push(css`
        background: ${theme.sys.color["surface-container-highest"]()};
        box-shadow: 0 0 ${dpToRem(1)} ${theme.sys.color.shadow()};
        border-radius: ${theme.sys.shape.corner.medium["default-size"]()};
    `);

    return classList;
}

const UKFilledCard: Component<{ children: JSX.Element }> = (props) => {
    return <BaseCard class={clsx(getClass())}>{props.children}</BaseCard>;
};

export default UKFilledCard;
