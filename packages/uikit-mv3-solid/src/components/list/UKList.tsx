import { type Component, type JSX } from "solid-js";

const UKList: Component<{ children: JSX.Element }> = (props) => {
    return <div>{props.children}</div>;
};

export default UKList;
