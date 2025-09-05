import { css } from "solid-styled-components";
import { type Component, type JSX } from "solid-js";
import { uk } from "../../core/design/tokens.ts";

const UKTonalButton: Component<{
    children: JSX.Element;
}> = (props) => {
    return (
        <div
            class={css`
                & > button + button {
                    background: red;
                    width: calc(100% + 1rem);
                }
            `}
        >
            {props.children}
        </div>
    );
};

export default UKTonalButton;
