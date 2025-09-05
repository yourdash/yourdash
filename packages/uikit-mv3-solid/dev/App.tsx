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
import UKList from "../src/components/list/UKList.tsx";
import UKListItem from "../src/components/list/UKListItem.tsx";
import { uk } from "../src/core/design/tokens.ts";
import UKButtonGroup from "../src/components/buttonGroup/UKButtonGroup.tsx";

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
                    flex-wrap: wrap;
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
                    flex-wrap: wrap;
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
                    flex-wrap: wrap;
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
                    flex-wrap: wrap;
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

            <UKFilledCard>
                <UKBadge count={12}>
                    <h3
                        class={css`
                            background: rgb(${uk.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `}
                    >
                        Random Placeholder
                    </h3>
                </UKBadge>

                <UKBadge count={1000}>
                    <h3
                        class={css`
                            background: rgb(${uk.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `}
                    >
                        Random Placeholder
                    </h3>
                </UKBadge>

                <UKBadge count={1}>
                    <h3
                        class={css`
                            background: rgb(${uk.sys.color["secondary-container"]});
                            width: 16rem;
                            margin: 0;
                            padding: 0.25rem;
                        `}
                    >
                        Random Placeholder
                    </h3>
                </UKBadge>
            </UKFilledCard>

            <UKList>
                <UKListItem
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    onClick={() => {}}
                />
                <UKListItem
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "icon",
                        value: "arrow_right",
                    }}
                    onClick={() => {}}
                />
                <UKListItem
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    trailing={{ type: "text", value: "100+" }}
                    onClick={() => {}}
                    canSelect={true}
                />
                <UKListItem
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "icon",
                        value: "arrow_right",
                    }}
                    onClick={() => {}}
                    trailing={{ type: "icon", value: "arrow_left" }}
                    selected={true}
                    canSelect={true}
                />
                <UKListItem
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "avatar",
                        value: "https://google.com/favicon.ico",
                    }}
                    onClick={() => {}}
                    trailing={{ type: "icon", value: "arrow_left" }}
                />
                <UKListItem
                    divider={true}
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "avatar",
                        value: "https://google.com/favicon.ico",
                    }}
                    onClick={() => {}}
                />
                <UKListItem
                    divider={true}
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "image",
                        value: "https://google.com/favicon.ico",
                    }}
                    onClick={() => {}}
                    selected={true}
                    canSelect={true}
                />
                <UKListItem
                    divider={true}
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "large-image",
                        value: "https://google.com/favicon.ico",
                    }}
                    onClick={() => {}}
                    selected={true}
                    canSelect={true}
                />
                <UKListItem
                    labelText={"Heading"}
                    supportingText={"Supporting text"}
                    leading={{
                        type: "video",
                        value: "https://google.com/favicon.ico",
                    }}
                    onClick={() => {}}
                />
            </UKList>

            <UKButtonGroup>
                <UKFilledButton size={"l"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={"l"} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={"l"} disabled onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={"l"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
                <UKFilledButton size={"l"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKFilledButton>
            </UKButtonGroup>

            <span>
                UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by{" "}
                <a href={"https://github.com/ewsgit"}>Ewsgit</a>
            </span>
        </Root>
    );
}
