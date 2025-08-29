import Root from "../src/components/Root.tsx";
import UKFilledButton from "../src/components/buttons/UKFilledButton.tsx";
import type { ButtonSize } from "../src/components/buttons/lib/size.ts";
import type { Component } from "solid-js";
import UKDivider from "../src/components/divider/UKDivider.tsx";
import { DividerDirection } from "../src/components/divider/lib/direction.ts";
import UKFilledCard from "../src/components/cards/UKFilledCard.tsx";
import UKTonalButton from "../src/components/buttons/UKTonalButton.tsx";
import UKOutlinedButton from "../src/components/buttons/UKOutlinedButton.tsx";
import UKTextButton from "../src/components/buttons/UKTextButton.tsx";
import { css } from "solid-styled-components";
import UKBadge from "../src/components/badge/UKBadge.tsx";

const ButtonVariantsForSize: Component<{ size: ButtonSize }> = ({ size }) => {
    return (
        <UKFilledCard>
            <h1>Button Variant '{size}'</h1>

            <h2>
                Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing
                & leading)
            </h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                `}
            >
                <UKFilledButton size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={size} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton
                    size={size}
                    leadingIcon={"borg"}
                    trailingIcon={"rotate_auto"}
                    onClick={() => {}}
                >
                    Confirm
                </UKFilledButton>
            </div>

            <h2>
                Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing
                & leading)
            </h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                `}
            >
                <UKTonalButton size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton size={size} onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton
                    size={size}
                    leadingIcon={"borg"}
                    trailingIcon={"rotate_auto"}
                    onClick={() => {}}
                >
                    Confirm
                </UKTonalButton>
            </div>

            <h2>
                Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon
                trailing & leading)
            </h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                `}
            >
                <UKOutlinedButton size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton size={size} onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton
                    size={size}
                    leadingIcon={"borg"}
                    trailingIcon={"rotate_auto"}
                    onClick={() => {}}
                >
                    Confirm
                </UKOutlinedButton>
            </div>

            <h2>
                Text Button (default, disabled, icon leading, icon trailing, icon trailing &
                leading)
            </h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                `}
            >
                <UKTextButton size={size} onClick={() => {}}>
                    Confirm
                </UKTextButton>
                <UKTextButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKTextButton>
                <UKTextButton size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKTextButton>
                <UKTextButton size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKTextButton>
                <UKTextButton
                    size={size}
                    leadingIcon={"borg"}
                    trailingIcon={"rotate_auto"}
                    onClick={() => {}}
                >
                    Confirm
                </UKTextButton>
            </div>
        </UKFilledCard>
    );
};

export default function App() {
    return (
        <Root>
            <ButtonVariantsForSize size={"xs"} />
            <UKDivider direction={DividerDirection.horizontal} />
            <ButtonVariantsForSize size={"s"} />
            <UKDivider direction={DividerDirection.horizontal} />
            <ButtonVariantsForSize size={"m"} />
            <UKDivider direction={DividerDirection.horizontal} />
            <ButtonVariantsForSize size={"l"} />
            <UKDivider direction={DividerDirection.horizontal} />
            <ButtonVariantsForSize size={"xl"} />

            <UKBadge count={12}>
                <h3
                    class={css`
                        width: 16rem;
                    `}
                >
                    Random Placeholder
                </h3>
            </UKBadge>

            <UKBadge count={1000}>
                <h3
                    class={css`
                        width: 16rem;
                    `}
                >
                    Random Placeholder
                </h3>
            </UKBadge>

            <UKBadge count={1}>
                <h3
                    class={css`
                        width: 16rem;
                    `}
                >
                    Random Placeholder
                </h3>
            </UKBadge>

            <span>
                UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by{" "}
                <a href={"https://github.com/ewsgit"}>Ewsgit</a>
            </span>
        </Root>
    );
}
