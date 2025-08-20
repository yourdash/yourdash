import Root from "../src/components/Root.tsx";
import UKFilledButton from "../src/components/buttons/UKFilledButton.tsx";

export default function App() {
    return (
        <Root>
            <UKFilledButton shape={"square"} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton onClick={() => {}}>Confirm</UKFilledButton>
            <UKFilledButton disabled shape={"square"} onClick={() => {}}>
                Confirm
            </UKFilledButton>
            <UKFilledButton disabled onClick={() => {}}>
                Confirm
            </UKFilledButton>
        </Root>
    );
}
