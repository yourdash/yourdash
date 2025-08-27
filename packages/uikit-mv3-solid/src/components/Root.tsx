import { type Component, type JSX } from "solid-js";
import { css } from "solid-styled-components";
import theme from "../core/theme.ts";

const Root: Component<{ children: JSX.Element }> = ({ children }) => {
    return (
        <div
            class={css`
                background-color: ${theme.sys.color.background()};
                min-height: 100vh;
                width: 100vw;

                /* debug purposes */
                display: flex;
                padding: 1rem;
                flex-direction: column;
                gap: 1rem;
            `}
        >
            {children}
        </div>
    );
};

export default Root;
