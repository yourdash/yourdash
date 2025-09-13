import { createSignal, type Component } from "solid-js";
import clsx from "clsx";
import { css } from "solid-styled-components";
import UKButton from "../button/UKButton";
import type { SplitButtonColor } from "./lib/color";
import type { SplitButtonSize } from "./lib/size";
import type { MenuItems } from "../menu/lib/items";
import UKIconButton from "../iconButton/UKIconButton";

const UKSplitButton: Component<{
    icon: string;
    children: string;
    class?: string;
    color?: SplitButtonColor;
    disabled?: boolean;
    onClick: (event: MouseEvent & { currentTarget: HTMLButtonElement; target: Element }) => void;
    size?: SplitButtonSize;
    // TODO: create a type for this
    dropDownItems: MenuItems;
}> = (props) => {
    const [dropdownSelected, setDropdownSelected] = createSignal<boolean>(false);

    return (
        <div
            class={clsx(
                props.class,
                css`
                    display: flex;
                    flex-direction: row;
                    gap: 0;
                `,
            )}
        >
            <UKButton
                class={css`
                    border: none !important;
                `}
                color={props.color}
                onClick={props.onClick}
            >
                {props.children}
            </UKButton>
            <UKIconButton
                icon={props.icon}
                alt="alt"
                onClick={() => {
                    setDropdownSelected(!dropdownSelected());
                }}
            />
            {/* TODO: add a menu here! */}
        </div>
    );
};

export default UKSplitButton;
