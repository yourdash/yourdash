import { type Component } from "solid-js";
import clsx from "clsx";
import type { ButtonSize } from "../buttons/lib/size";
import UKFilledButton from "../buttons/UKFilledButton";

const UKSplitFilledButton: Component<{
    children: string;
    class?: string;
    disabled?: boolean;
    onClick: (value?: boolean) => void;
    size?: ButtonSize;
    // TODO: create a type for this
    dropDownItems: {}[];
}> = (props) => {
    return (
        <UKFilledButton size={props.size || "s"} onClick={() => 0} class={clsx(props.class)} disabled={props.disabled || false}>
            {props.children}
        </UKFilledButton>
    );
};

export default UKSplitFilledButton;
