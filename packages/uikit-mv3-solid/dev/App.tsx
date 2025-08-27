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
        <>
            <UKFilledButton size={size} togglable={true} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton size={size} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton size={size} disabled onClick={() => {}}>
                Confirm
            </UKFilledButton>

            <UKTonalButton size={size} togglable={true} onClick={() => {}}>
                Confirm
            </UKTonalButton>
            <UKTonalButton size={size} onClick={() => {}}>
                Confirm
            </UKTonalButton>
            <UKTonalButton size={size} disabled onClick={() => {}}>
                Confirm
            </UKTonalButton>

            <UKOutlinedButton size={size} togglable={true} onClick={() => {}}>
                Confirm
            </UKOutlinedButton>
            <UKOutlinedButton size={size} onClick={() => {}}>
                Confirm
            </UKOutlinedButton>
            <UKOutlinedButton size={size} disabled onClick={() => {}}>
                Confirm
            </UKOutlinedButton>

            <UKTextButton size={size} onClick={() => {}}>
                Confirm
            </UKTextButton>
            <UKTextButton size={size} disabled onClick={() => {}}>
                Confirm
            </UKTextButton>
        </>
    );
};

export default function App() {
    return (
        <Root>
            <div>
                <ButtonVariantsForSize size={"xs"} />
            </div>
            <UKDivider direction={DividerDirection.horizontal} />
            <div>
                <ButtonVariantsForSize size={"s"} />
            </div>
            <UKDivider direction={DividerDirection.horizontal} />
            <div>
                <ButtonVariantsForSize size={"m"} />
            </div>
            <UKDivider direction={DividerDirection.horizontal} />
            <div>
                <ButtonVariantsForSize size={"l"} />
            </div>
            <UKDivider direction={DividerDirection.horizontal} />
            <UKFilledCard>
                <ButtonVariantsForSize size={"xl"} />
            </UKFilledCard>
        </Root>
    );
}
