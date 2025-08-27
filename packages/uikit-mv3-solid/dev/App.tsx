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

const ButtonVariantsForSize: Component<{ size: ButtonSize }> = ({ size }) => {
    return (
        <UKFilledCard>
            <h1>Button Variant '{size}'</h1>

            <h2>Filled Button (toggle, default, disabled)</h2>
            <div>
                <UKFilledButton size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={size} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKFilledButton>
            </div>

            <h2>Tonal Button (toggle, default, disabled)</h2>
            <div>
                <UKTonalButton size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton size={size} onClick={() => {}}>
                    Confirm
                </UKTonalButton>
                <UKTonalButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKTonalButton>
            </div>

            <h2>Outlined Button (toggle, default, disabled)</h2>
            <div>
                <UKOutlinedButton size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton size={size} onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
                <UKOutlinedButton size={size} disabled onClick={() => {}}>
                    Confirm
                </UKOutlinedButton>
            </div>

            <h2>Text Button (default, disabled)</h2>
            <div>
                <UKTextButton size={size} onClick={() => {}}>
                    Confirm
                </UKTextButton>
                <UKTextButton size={size} disabled onClick={() => {}}>
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
        </Root>
    );
}
