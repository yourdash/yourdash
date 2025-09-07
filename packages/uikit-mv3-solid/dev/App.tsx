import Root from "../src/components/Root.tsx";
import type { ButtonSize } from "../src/components/buttons/lib/size.ts";
import type { Component } from "solid-js";
import UKDivider from "../src/components/divider/UKDivider.tsx";
import { DividerDirection } from "../src/components/divider/lib/direction.ts";
import UKFilledCard from "../src/components/cards/UKFilledCard.tsx";
import { css } from "solid-styled-components";
import UKBadge from "../src/components/badge/UKBadge.tsx";
import UKList from "../src/components/list/UKList.tsx";
import UKListItem from "../src/components/list/UKListItem.tsx";
import { uk } from "../src/core/design/tokens.ts";
import UKButtonGroup from "../src/components/buttonGroup/UKButtonGroup.tsx";
import UKButton from "../src/components/buttons/UKButton.tsx";

const ButtonVariantsForSize: Component<{ size: ButtonSize }> = ({ size }) => {
    return (
        <UKFilledCard>
            <h1>Button Variant '{size}'</h1>

            <h2>Filled Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)</h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
            >
                <UKButton color="filled" size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={size} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={size} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={size} leadingIcon={"borg"} trailingIcon={"rotate_auto"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </div>

            <h2>Tonal Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)</h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
            >
                <UKButton color="tonal" size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="tonal" size={size} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="tonal" size={size} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="tonal" size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="tonal" size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="tonal" size={size} leadingIcon={"borg"} trailingIcon={"rotate_auto"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </div>

            <h2>Outlined Button (toggle, default, disabled, icon leading, icon trailing, icon trailing & leading)</h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
            >
                <UKButton color="outlined" size={size} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="outlined" size={size} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="outlined" size={size} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="outlined" size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="outlined" size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="outlined" size={size} leadingIcon={"borg"} trailingIcon={"rotate_auto"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </div>

            <h2>Text Button (default, disabled, icon leading, icon trailing, icon trailing & leading)</h2>
            <div
                class={css`
                    display: flex;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                `}
            >
                <UKButton color="standard" size={size} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="standard" size={size} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="standard" size={size} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="standard" size={size} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="standard" size={size} leadingIcon={"borg"} trailingIcon={"rotate_auto"} onClick={() => {}}>
                    Confirm
                </UKButton>
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
                <UKListItem labelText={"Heading"} supportingText={"Supporting text"} onClick={() => {}} />
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

            <UKButtonGroup size={"xs"}>
                <UKButton color="filled" size={"xs"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup size={"s"}>
                <UKButton color="filled" size={"s"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup size={"m"}>
                <UKButton color="filled" size={"m"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup size={"l"}>
                <UKButton color="filled" size={"l"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup size={"xl"}>
                <UKButton color="filled" size={"xl"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup connected size={"xs"}>
                <UKButton color="filled" size={"xs"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xs"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup connected size={"s"}>
                <UKButton color="filled" size={"s"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"s"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup connected size={"m"}>
                <UKButton color="filled" size={"m"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"m"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup connected size={"l"}>
                <UKButton color="filled" size={"l"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"l"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            <UKButtonGroup connected size={"xl"}>
                <UKButton color="filled" size={"xl"} togglable={true} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} disabled onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} leadingIcon={"verified"} onClick={() => {}}>
                    Confirm
                </UKButton>
                <UKButton color="filled" size={"xl"} trailingIcon={"face"} onClick={() => {}}>
                    Confirm
                </UKButton>
            </UKButtonGroup>

            {/* <UKSplitFilledButton onClick={() => 0} dropDownItems={[]}>
                test
            </UKSplitFilledButton> */}

            <span>
                UIKit Material Expressive for SolidJS | "@yourdash/uikit-mv3-solid" | Created by{" "}
                <a href={"https://github.com/ewsgit"}>Ewsgit</a>
            </span>
        </Root>
    );
}
