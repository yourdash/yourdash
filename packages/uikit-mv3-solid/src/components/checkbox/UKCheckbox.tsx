import { type Component, type JSX } from "solid-js";
import { css } from "solid-styled-components";
import dpToRem from "../../core/dp.ts";
import { uk } from "../../core/design/tokens.ts";

const container = css`
    width: ${dpToRem(18)};
    height: ${dpToRem(18)};
    background-color: rgb(${uk.sys.color.primary});
`;

const UKCheckbox: Component<{ children: JSX.Element }> = (props) => {
    return (
        <input type={"checkbox"} class={container}>
            {props.children}
        </input>
    );
};

export default UKCheckbox;
