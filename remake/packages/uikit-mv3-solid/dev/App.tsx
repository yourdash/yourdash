import Root from "../src/components/Root.tsx";
import UKFilledButton from "../src/components/buttons/UKFilledButton.tsx";
import type { ButtonSize } from "../src/components/buttons/lib/size.ts";
import type { Component } from "solid-js";

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
            <div>
                <ButtonVariantsForSize size={"s"} />
            </div>
            <div>
                <ButtonVariantsForSize size={"m"} />
            </div>
            <div>
                <ButtonVariantsForSize size={"l"} />
            </div>
            <div>
                <ButtonVariantsForSize size={"xl"} />
            </div>
        </Root>
    );
}
