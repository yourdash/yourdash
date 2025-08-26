import Root from "../src/components/Root.tsx";
import UKFilledButton from "../src/components/buttons/UKFilledButton.tsx";
import type { ButtonSize } from "../src/components/buttons/lib/size.ts";
import type { Component } from "solid-js";
import UKDivider from "../src/components/divider/UKDivider.tsx";
import { DividerDirection } from "../src/components/divider/lib/direction.ts";

const ButtonVariantsForSize: Component<{ size: ButtonSize }> = ({ size }) => {
    return (
        <>
            <UKFilledButton size={size} shape={"square"} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton size={size} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton size={size} disabled shape={"square"} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton size={size} disabled onClick={() => {}}>
                Confirm
            </UKFilledButton>
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
            <div>
                <ButtonVariantsForSize size={"xl"} />
            </div>
        </Root>
    );
}
