import { type Component, createEffect, type JSX } from "solid-js";
import { styled } from "solid-styled-components";
import { applyTheme, uk } from "../core/design/tokens.ts";
import { baselineTheme } from "../core/design/themes/baseline.ts";
import { createMediaQuery } from "@solid-primitives/media";

const Container = styled.div`
    background-color: rgb(${uk.sys.color.background});
    color: rgb(${uk.sys.color["on-background"]});
    transition: background-color ${uk.sys.motion["duration-250"]}
        ${uk.sys.motion.easing.standard.normal};
    min-height: 100vh;
    width: 100%;

    /* debug purposes */
    display: flex;
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    font-family: Roboto, system-ui;
`;

const Root: Component<{ children: JSX.Element }> = ({ children }) => {
    const isLightMode = createMediaQuery("(prefers-color-scheme: light)");
    let elem!: HTMLDivElement;

    createEffect(() => {
        applyTheme(baselineTheme, elem, isLightMode() ? "light" : "dark");
    });

    return <Container ref={elem}>{children}</Container>;
};

export default Root;
