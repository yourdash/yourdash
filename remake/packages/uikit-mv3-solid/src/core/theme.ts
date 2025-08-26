/*
 .shape-none {
 border-radius: var(sys-shape-corner-none-default-size)
 }
 .shape-extra-small {
 border-radius: var(sys-shape-corner-extra-small-default-size)
 }
 .shape-small {
 border-radius: var(sys-shape-corner-small-default-size)
 }
 .shape-medium {
 border-radius: var(sys-shape-corner-medium-default-size)
 }
 .shape-large {
 border-radius: var(sys-shape-corner-large-default-size)
 }
 .shape-extra-large {
 border-radius: var(sys-shape-corner-extra-large-default-size)
 }
 .extra-small-top {
 border-top-left-radius: var(sys-shape-corner-extra-small-top-top-left)
 border-top-right-radius: var(sys-shape-corner-extra-small-top-top-right)
 }
 .large-end {
 border-top-right-radius: var(sys-shape-corner-large-end-top-right)
 border-bottom-right-radius: var(sys-shape-corner-large-end-bottom-right)
 }
 .large-top {
 border-top-left-radius: var(sys-shape-corner-large-top-top-left)
 border-top-right-radius: var(sys-shape-corner-large-top-top-right)
 }
 .extra-large-top {
 border-top-left-radius: var(sys-shape-corner-extra-large-top-top-left)
 border-top-right-radius: var(sys-shape-corner-extra-large-top-top-right)
 }

 .duration-50 {
 transition-duration: var(sys-motion-duration-50)
 }
 .duration-100 {
 transition-duration: var(sys-motion-duration-100)
 }
 .duration-150 {
 transition-duration: var(sys-motion-duration-150)
 }
 .duration-200 {
 transition-duration: var(sys-motion-duration-200)
 }
 .duration-250 {
 transition-duration: var(sys-motion-duration-250)
 }
 .duration-300 {
 transition-duration: var(sys-motion-duration-300)
 }
 .duration-350 {
 transition-duration: var(sys-motion-duration-350)
 }
 .duration-400 {
 transition-duration: var(sys-motion-duration-400)
 }
 .duration-450 {
 transition-duration: var(sys-motion-duration-450)
 }
 .duration-500 {
 transition-duration: var(sys-motion-duration-500)
 }
 .duration-550 {
 transition-duration: var(sys-motion-duration-550)
 }
 .duration-600 {
 transition-duration: var(sys-motion-duration-600)
 }
 .duration-700 {
 transition-duration: var(sys-motion-duration-700)
 }
 .duration-800 {
 transition-duration: var(sys-motion-duration-800)
 }
 .duration-900 {
 transition-duration: var(sys-motion-duration-900)
 }
 .duration-1000 {
 transition-duration: var(sys-motion-duration-1000)
 }
 .easing-standard {
 transition-timing-function: cubic-bezier(
 var(sys-motion-easing-standard-x0),
 var(sys-motion-easing-standard-y0),
 var(sys-motion-easing-standard-x1),
 var(sys-motion-easing-standard-y1)
 )
 }
 .easing-linear {
 transition-timing-function: cubic-bezier(
 var(sys-motion-easing-linear-x0),
 var(sys-motion-easing-linear-y0),
 var(sys-motion-easing-linear-x1),
 var(sys-motion-easing-linear-y1)
 )
 }
 .easing-standard-accelerate {
 transition-timing-function: cubic-bezier(
 var(sys-motion-easing-standard-accelerate-x0),
 var(sys-motion-easing-standard-accelerate-y0),
 var(sys-motion-easing-standard-accelerate-x1),
 var(sys-motion-easing-standard-accelerate-y1)
 )
 }
 .easing-standard-decelerate {
 transition-timing-function: cubic-bezier(
 var(sys-motion-easing-standard-decelerate-x0),
 var(sys-motion-easing-standard-decelerate-y0),
 var(sys-motion-easing-standard-decelerate-x1),
 var(sys-motion-easing-standard-decelerate-y1)
 )
 }
 .easing-emphasized {
 transition-timing-function: cubic-bezier(
 var(sys-motion-easing-emphasized-x0),
 var(sys-motion-easing-emphasized-y0),
 var(sys-motion-easing-emphasized-x1),
 var(sys-motion-easing-emphasized-y1)
 )
 }

.hover-state-layer {
    var(sys-state-hover-state-layer-opacity)
}
.pressed-state-layer {
    var(sys-state-pressed-state-layer-opacity)
}
.dragged-state-layer {
    var(sys-state-dragged-state-layer-opacity)
}
.focus-state-layer {
    var(sys-state-focus-state-layer-opacity)
}
 .elevation-0 {
 box-shadow: var(sys-elevation-level0)
 }
 .elevation-1 {
 box-shadow: var(sys-elevation-level1)
 }
 .elevation-2 {
 box-shadow: var(sys-elevation-level2)
 }
 .elevation-3 {
 box-shadow: var(sys-elevation-level3)
 }
 .elevation-4 {
 box-shadow: var(sys-elevation-level4)
 }
 .elevation-5 {
 box-shadow: var(sys-elevation-level5)
 }

 .primary {
 color: var(sys-color-on-primary)
 background-color: var(sys-color-primary)
 }
 .on-primary {
 color: var(sys-color-primary)
 background-color: var(sys-color-on-primary)
 }
 .primary-container {
 color: var(sys-color-on-primary-container)
 background-color: var(sys-color-primary-container)
 }
 .on-primary-container {
 color: var(sys-color-primary-container)
 background-color: var(sys-color-on-primary-container)
 }
 .secondary {
 color: var(sys-color-on-secondary)
 background-color: var(sys-color-secondary)
 }
 .on-secondary {
 color: var(sys-color-secondary)
 background-color: var(sys-color-on-secondary)
 }
 .secondary-container {
 color: var(sys-color-on-secondary-container)
 background-color: var(sys-color-secondary-container)
 }
 .on-secondary-container {
 color: var(sys-color-secondary-container)
 background-color: var(sys-color-on-secondary-container)
 }
 .tertiary {
 color: var(sys-color-on-tertiary)
 background-color: var(sys-color-tertiary)
 }
 .on-tertiary {
 color: var(sys-color-tertiary)
 background-color: var(sys-color-on-tertiary)
 }
 .tertiary-container {
 color: var(sys-color-on-tertiary-container)
 background-color: var(sys-color-tertiary-container)
 }
 .on-tertiary-container {
 color: var(sys-color-tertiary-container)
 background-color: var(sys-color-on-tertiary-container)
 }
 .background {
 color: var(sys-color-on-background)
 background-color: var(sys-color-background)
 }
 .surface {
 color: var(sys-color-on-surface)
 background-color: var(sys-color-surface)
 }
 .surface-variant {
 color: var(sys-color-on-surface-variant)
 background-color: var(sys-color-surface-variant)
 }
 .on-surface-variant {
 color: var(sys-color-surface-variant)
 background-color: var(sys-color-on-surface-variant)
 }
 .outline {
 1px solid var(sys-color-outline)
 }
 .inverse-surface {
 color: var(sys-color-on-inverse-surface)
 background-color: var(sys-color-inverse-surface)
 }
 .on-inverse-surface {
 color: var(sys-color-inverse-surface)
 background-color: var(sys-color-on-inverse-surface)
 }
 .inverse-primary {
 color: var(sys-color-on-inverse-primary)
 background-color: var(sys-color-inverse-primary)
 }
 .on-inverse-primary {
 color: var(sys-color-inverse-primary)
 background-color: var(sys-color-on-inverse-primary)
 }
 .surcolor: face-tint {
 background-color: var(sys-color-on-surface-tint)
 }
 .error {
 color: var(sys-color-on-error)
 background-color: var(sys-color-error)
 }
 .on-error {
 color: var(sys-color-error)
 background-color: var(sys-color-on-error)
 }
 .error-container {
 color: var(sys-color-on-error-container)
 background-color: var(sys-color-error-container)
 }
 .on-error-container {
 color: var(sys-color-error-container)
 background-color: var(sys-color-on-error-container)
 }
 .black {
 background-color: var(ref-palette-black)
 }
 .black-text {
 var(ref-palette-black)
 }
 .white {
 background-color: var(ref-palette-white)
 }
 .white-text {
 var(ref-palette-white)
 }

*/

import dpToRem from "./dp.ts";

let theme = {
    ref: {
        palette: {
            /* Error 0 */
            error0: () => "#000000ff",
            /* Error 10 */
            error10: () => "#410e0bff",
            /* Error 20 */
            error20: () => "#601410ff",
            /* Error 30 */
            error30: () => "#8c1d18ff",
            /* Error 40 */
            error40: () => "#b3261eff",
            /* Error 50 */
            error50: () => "#dc362eff",
            /* Error 60 */
            error60: () => "#e46962ff",
            /* Error 70 */
            error70: () => "#ec928eff",
            /* Error 80 */
            error80: () => "#f2b8b5ff",
            /* Error 90 */
            error90: () => "#f9dedcff",
            /* Error 95 */
            error95: () => "#fceeeeff",
            /* Error 99 */
            error99: () => "#fffbf9ff",
            /* Error 100 */
            error100: () => "#ffffffff",
            /* Tertiary 0 */
            tertiary0: () => "#000000ff",
            /* Tertiary 10 */
            tertiary10: () => "#31111dff",
            /* Tertiary 20 */
            tertiary20: () => "#492532ff",
            /* Tertiary 30 */
            tertiary30: () => "#633b48ff",
            /* Tertiary 40 */
            tertiary40: () => "#7d5260ff",
            /* Tertiary 50 */
            tertiary50: () => "#986977ff",
            /* Tertiary 60 */
            tertiary60: () => "#b58392ff",
            /* Tertiary 70 */
            tertiary70: () => "#d29dacff",
            /* Tertiary 80 */
            tertiary80: () => "#efb8c8ff",
            /* Tertiary 90 */
            tertiary90: () => "#ffd8e4ff",
            /* Tertiary 95 */
            tertiary95: () => "#ffecf1ff",
            /* Tertiary 99 */
            tertiary99: () => "#fffbfaff",
            /* Tertiary 100 */
            tertiary100: () => "#ffffffff",
            /* Secondary 0 */
            secondary0: () => "#000000ff",
            /* Secondary 10 */
            secondary10: () => "#1d192bff",
            /* Secondary 20 */
            secondary20: () => "#332d41ff",
            /* Secondary 30 */
            secondary30: () => "#4a4458ff",
            /* Secondary 40 */
            secondary40: () => "#625b71ff",
            /* Secondary 50 */
            secondary50: () => "#7a7289ff",
            /* Secondary 60 */
            secondary60: () => "#958da5ff",
            /* Secondary 70 */
            secondary70: () => "#b0a7c0ff",
            /* Secondary 80 */
            secondary80: () => "#ccc2dcff",
            /* Secondary 90 */
            secondary90: () => "#e8def8ff",
            /* Secondary 95 */
            secondary95: () => "#f6edffff",
            /* Secondary 99 */
            secondary99: () => "#fffbfeff",
            /* Secondary 100 */
            secondary100: () => "#ffffffff",
            /* Primary 0 */
            primary0: () => "#000000ff",
            /* Primary 10 */
            primary10: () => "#21005dff",
            /* Primary 20 */
            primary20: () => "#381e72ff",
            /* Primary 30 */
            primary30: () => "#4f378bff",
            /* Primary 40 */
            primary40: () => "#6750a4ff",
            /* Primary 50 */
            primary50: () => "#7f67beff",
            /* Primary 60 */
            primary60: () => "#9a82dbff",
            /* Primary 70 */
            primary70: () => "#b69df8ff",
            /* Primary 80 */
            primary80: () => "#d0bcffff",
            /* Primary 90 */
            primary90: () => "#eaddffff",
            /* Primary 95 */
            primary95: () => "#f6edffff",
            /* Primary 99 */
            primary99: () => "#fffbfeff",
            /* Primary 100 */
            primary100: () => "#ffffffff",
            /* Neutral Variant 0 */
            "neutral-variant0": () => "#000000ff",
            /* Neutral Variant 10 */
            "neutral-variant10": () => "#1d1a22ff",
            /* Neutral Variant 20 */
            "neutral-variant20": () => "#322f37ff",
            /* Neutral Variant 30 */
            "neutral-variant30": () => "#49454fff",
            /* Neutral Variant 40 */
            "neutral-variant40": () => "#605d66ff",
            /* Neutral Variant 50 */
            "neutral-variant50": () => "#79747eff",
            /* Neutral Variant 60 */
            "neutral-variant60": () => "#938f99ff",
            /* Neutral Variant 70 */
            "neutral-variant70": () => "#aea9b4ff",
            /* Neutral Variant 80 */
            "neutral-variant80": () => "#cac4d0ff",
            /* Neutral Variant 90 */
            "neutral-variant90": () => "#e7e0ecff",
            /* Neutral Variant 95 */
            "neutral-variant95": () => "#f5eefaff",
            /* Neutral Variant 99 */
            "neutral-variant99": () => "#fffbfeff",
            /* Neutral Variant 100 */
            "neutral-variant100": () => "#ffffffff",
            /* Neutral 0 */
            neutral0: () => "#000000ff",
            /* Neutral 10 */
            neutral10: () => "#1c1b1fff",
            /* Neutral 20 */
            neutral20: () => "#313033ff",
            /* Neutral 30 */
            neutral30: () => "#484649ff",
            /* Neutral 40 */
            neutral40: () => "#605d62ff",
            /* Neutral 50 */
            neutral50: () => "#787579ff",
            /* Neutral 60 */
            neutral60: () => "#939094ff",
            /* Neutral 70 */
            neutral70: () => "#aeaaaeff",
            /* Neutral 80 */
            neutral80: () => "#c9c5caff",
            /* Neutral 90 */
            neutral90: () => "#e6e1e5ff",
            /* Neutral 95 */
            neutral95: () => "#f4eff4ff",
            /* Neutral 99 */
            neutral99: () => "#fffbfeff",
            /* Neutral 100 */
            neutral100: () => "#ffffffff",
            /* Black */
            black: () => "#000000ff",
            /* White */
            white: () => "#ffffffff",
        },
        typeface: {
            /* Plain typeface */
            plain: () => "Roboto",
            /* Brand typeface */
            brand: () => "Roboto",
            /* Bold weight */
            "weight-bold": () => "700",
            /* Medium weight */
            "weight-medium": () => "500",
            /* Regular weight */
            "weight-regular": () => "400",
        },
    },
    sys: {
        typescale: {
            /* Label Small */
            "label-small": {
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Label Small line height */
                "line-height-value": () => dpToRem(16),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(16),
                /* Label Small font tracking */
                "tracking-value": () => dpToRem(0.5),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.5),
                /* Label Small font size */
                "size-value": () => dpToRem(11),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(11),
                /* Label Small font weight */
                weight: () => theme.ref.typeface["weight-medium"](),
                /* Label Small font name */
                font: () => theme.ref.typeface.plain(),
            },
            /* Label Medium */
            "label-medium": {
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Label Medium text transform */
                "text-transform": () => "1",
                /* Label Medium line height */
                "line-height-value": () => dpToRem(16),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(16),
                /* Label Medium font tracking */
                "tracking-value": () => dpToRem(0.5),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.5),
                /* Label Medium font size */
                "size-value": () => dpToRem(12),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(12),
                /* Label Medium font weight */
                weight: () => theme.ref.typeface["weight-medium"](),
                /* Label Medium font name */
                font: () => theme.ref.typeface.plain(),
            },
            "label-large": {
                /* Label Large */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Label Large line height */
                "line-height-value": () => dpToRem(20),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(20),
                /* Label Large font tracking */
                "tracking-value": () => dpToRem(0.10000000149011612),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.10000000149011612),
                /* Label Large font size */
                "size-value": () => dpToRem(14),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(14),
                /* Label Large font weight */
                weight: () => theme.ref.typeface["weight-medium"](),
                /* Label Large font name */
                font: () => theme.ref.typeface.plain(),
            },
            "body-small": {
                /* Body Small */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Body Small line height */
                "line-height-value": () => dpToRem(16),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(16),
                /* Body Small font tracking */
                "tracking-value": () => dpToRem(0.4000000059604645),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.4000000059604645),
                /* Body Small font size */
                "size-value": () => dpToRem(12),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(12),
                /* Body Small font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Body Small font name */
                font: () => theme.ref.typeface.plain(),
            },
            "body-medium": {
                /* Body Medium */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Body Medium line height */
                "line-height-value": () => dpToRem(20),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(20),
                /* Body Medium font tracking */
                "tracking-value": () => dpToRem(0.25),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.25),
                /* Body Medium font size */
                "size-value": () => dpToRem(14),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(14),
                /* Body Medium font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Body Medium font name */
                font: () => theme.ref.typeface.plain(),
            },
            "body-large": {
                /* Body Large */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Body Large line height */
                "line-height-value": () => dpToRem(24),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(24),
                /* Body Large font tracking */
                "tracking-value": () => dpToRem(0.5),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.5),
                /* Body Large font size */
                "size-value": () => dpToRem(16),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(16),
                /* Body Large font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Body Large font name */
                font: () => theme.ref.typeface.plain(),
            },
            "title-small": {
                /* Title Small */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Title Small line height */
                "line-height-value": () => dpToRem(20),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(20),
                /* Title Small font tracking */
                "tracking-value": () => dpToRem(0.10000000149011612),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.10000000149011612),
                /* Title Small font size */
                "size-value": () => dpToRem(14),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(14),
                /* Title Small font weight */
                weight: () => theme.ref.typeface["weight-medium"](),
                /* Title Small font name */
                font: () => theme.ref.typeface.plain(),
            },
            "title-medium": {
                /* Title Medium */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Title Medium line height */
                "line-height-value": () => dpToRem(24),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(24),
                /* Title Medium font tracking */
                "tracking-value": () => dpToRem(0.15000000596046448),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0.15000000596046448),
                /* Title Medium font size */
                "size-value": () => dpToRem(16),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(16),
                /* Title Medium font weight */
                weight: () => theme.ref.typeface["weight-medium"](),
                /* Title Medium font name */
                font: () => theme.ref.typeface.plain(),
            },
            /* Title Large */
            "title-large": {
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Title Large line height */
                "line-height-value": () => dpToRem(28),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(28),
                /* Title Large font tracking */
                "tracking-value": () => dpToRem(0),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0),
                /* Title Large font size */
                "size-value": () => dpToRem(22),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(22),
                /* Title Large font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Title Large font name */
                font: () => theme.ref.typeface.brand(),
            },
            "headline-small": {
                /* Headline Small */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Headline Small line height */
                "line-height-value": () => dpToRem(32),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(32),
                /* Headline Small font tracking */
                "tracking-value": () => dpToRem(0),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0),
                /* Headline Small font size */
                "size-value": () => dpToRem(24),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(24),
                /* Headline Small font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Headline Small font name */
                font: () => theme.ref.typeface.brand(),
            },
            /* Headline Medium */
            "headline-medium": {
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Headline Medium line height */
                "line-height-value": () => dpToRem(36),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(36),
                /* Headline Medium font tracking */
                "tracking-value": () => dpToRem(0),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0),
                /* Headline Medium font size */
                "size-value": () => dpToRem(28),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(28),
                /* Headline Medium font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Headline Medium font name */
                font: () => theme.ref.typeface.brand(),
            },
            /* Headline Large */
            "headline-large": {
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Headline Large line height */
                "line-height-value": () => dpToRem(40),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(40),
                /* Headline Large font tracking */
                "tracking-value": () => dpToRem(0),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0),
                /* Headline Large font size */
                "size-value": () => dpToRem(32),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(32),
                /* Headline Large font name */
                font: () => theme.ref.typeface.brand(),
                /* Headline Large font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
            },
            "display-small": {
                /* Display Small */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Display Small line height */
                "line-height-value": () => dpToRem(44),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(44),
                /* Display Small font tracking */
                "tracking-value": () => dpToRem(0),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0),
                /* Display Small font size */
                "size-value": () => dpToRem(36),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(36),
                /* Display Small font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Display Small font name */
                font: () => theme.ref.typeface.brand(),
            },
            /* Display Medium */
            "display-medium": {
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Display Medium line height */
                "line-height-value": () => dpToRem(52),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(52),
                /* Display Medium font tracking */
                "tracking-value": () => dpToRem(0),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(0),
                /* Display Medium font size */
                "size-value": () => dpToRem(45),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(45),
                /* Display Medium font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Display Medium font name */
                font: () => theme.ref.typeface.brand(),
            },
            "display-large": {
                /* Display Large */
                "text-transform": () => "unset",
                "axis-value": () => "unset",
                "font-style": () => "unset",
                "text-decoration": () => "unset",
                /* Display Large line height */
                "line-height-value": () => dpToRem(64),
                "line-height-unit": () => dpToRem(2),
                "line-height": () => dpToRem(64),
                /* Display Large font tracking */
                "tracking-value": () => dpToRem(-0.25),
                "tracking-unit": () => dpToRem(2),
                tracking: () => dpToRem(-0.25),
                /* Display Large font size */
                "size-value": () => dpToRem(57),
                "size-unit": () => dpToRem(2),
                size: () => dpToRem(57),
                /* Display Large font weight */
                weight: () => theme.ref.typeface["weight-regular"](),
                /* Display Large font name */
                font: () => theme.ref.typeface.brand(),
            },
        },
        elevation: {
            surface: {
                /* Surface tint color */
                "tint-color": () => theme.sys.color.primary(),
            },
            /* +5 */
            "level5-value": () => 1,
            "level5-unit": () => 1,
            level5: () => 1,
            /* +4 */
            "level4-value": () => 8,
            "level4-unit": () => 1,
            level4: () => 8,
            /* +3 */
            "level3-value": () => 6,
            "level3-unit": () => 1,
            level3: () => 6,
            /* +2 */
            "level2-value": () => 3,
            "level2-unit": () => 1,
            level2: () => 3,
            /* +1 */
            "level1-value": () => 1,
            "level1-unit": () => 1,
            level1: () => 1,
            /* 0 */
            "level0-value": () => 0,
            "level0-unit": () => 1,
            level0: () => 0,
        },
        state: {
            /* Dragged state layer opacity */
            dragged: { "state-layer-opacity": () => 0.1599999964237213 },
            /* Pressed state layer opacity */
            pressed: { "state-layer-opacity": () => 0.11999999731779099 },
            /* Focus state layer opacity */
            focus: { "state-layer-opacity": () => 0.11999999731779099 },
            /* Hover state layer opacity */
            hover: { "state-layer-opacity": () => 0.07999999821186066 },
        },
        shape: {
            corner: {
                /* Fully rounded */
                "full-family": () => dpToRem(3),
                "extra-large": {
                    /* Extra large top rounding */
                    top: {
                        family: () => dpToRem(1),
                        "default-size": () => dpToRem(0),
                        "top-left": () => dpToRem(28),
                        "top-right-unit": () => dpToRem(1),
                        "top-right": () => dpToRem(28),
                    },
                    /* Extra large rounding */
                    family: () => dpToRem(1),
                    "default-size-unit": () => dpToRem(1),
                    "default-size": () => dpToRem(28),
                },

                large: {
                    /* Large top rounding */
                    top: {
                        family: () => dpToRem(1),
                        "default-size-unit": () => dpToRem(1),
                        "default-size": () => dpToRem(0),
                        "top-left-unit": () => dpToRem(1),
                        "top-left": () => dpToRem(16),
                        "top-right-unit": () => dpToRem(1),
                        "top-right": () => dpToRem(16),
                    },
                    /* Large end rounding */
                    end: {
                        family: () => dpToRem(1),
                        "default-size-unit": () => dpToRem(1),
                        "default-size": () => dpToRem(0),
                        "top-right-unit": () => dpToRem(1),
                        "top-right": () => dpToRem(16),
                        "bottom-right-unit": () => dpToRem(1),
                        "bottom-right": () => dpToRem(16),
                    },
                    /* Large rounding */
                    family: () => dpToRem(1),
                    "default-size-unit": () => dpToRem(1),
                    "default-size": () => dpToRem(16),
                },

                /* Medium rounding */
                medium: {
                    family: () => dpToRem(1),
                    "default-size-unit": () => dpToRem(1),
                    "default-size": () => dpToRem(12),
                },

                /* Small rounding */
                small: {
                    family: () => dpToRem(1),
                    "default-size-unit": () => dpToRem(1),
                    "default-size": () => dpToRem(8),
                },

                "extra-small": {
                    /* Extra small top rounding */
                    top: {
                        family: () => dpToRem(1),
                        "default-size-unit": () => dpToRem(1),
                        "default-size": () => dpToRem(0),
                        "top-left-unit": () => dpToRem(1),
                        "top-left": () => dpToRem(4),
                        "top-right-unit": () => dpToRem(1),
                        "top-right": () => dpToRem(4),
                    },
                    /* Extra small rounding */
                    family: () => dpToRem(1),
                    "default-size-unit": () => dpToRem(1),
                    "default-size": () => dpToRem(4),
                },

                /* No rounding */
                none: {
                    family: () => dpToRem(1),
                    "default-size-unit": () => dpToRem(1),
                    "default-size": () => dpToRem(0),
                },

                full: () => dpToRem(999),
            },
        },
        motion: {
            easing: {
                emphasized: {
                    normal: () => "cubic-bezier(.3,0,0,1)",
                    accelerate: () => "cubic-bezier(.3,0,.8,.15)",
                    decelerate: () => "cubic-bezier(.05,.7,.1,1)",
                },
                standard: {
                    normal: () => "cubic-bezier(0.2, 0, 0, 1)",
                    accelerate: () => "cubic-bezier(.3,0,1,1)",
                    decelerate: () => "cubic-bezier(0,0,0,1)",
                },
                linear: () => `linear`,
            },
            /* Duration 1000ms */
            "duration-1000": () => "1000ms",
            /* Duration 900ms */
            "duration-900": () => "900ms",
            /* Duration 800ms */
            "duration-800": () => "800ms",
            /* Duration 700ms */
            "duration-700": () => "700ms",
            /* Duration 600ms */
            "duration-600": () => "600ms",
            /* Duration 550ms */
            "duration-550": () => "550ms",
            /* Duration 500ms */
            "duration-500": () => "500ms",
            /* Duration 450ms */
            "duration-450": () => "450ms",
            /* Duration 400ms */
            "duration-400": () => "400ms",
            /* Duration 350ms */
            "duration-350": () => "350ms",
            /* Duration 300ms */
            "duration-300": () => "300ms",
            /* Duration 250ms */
            "duration-250": () => "250ms",
            /* Duration 200ms */
            "duration-200": () => "200ms",
            /* Duration 150ms */
            "duration-150": () => "150ms",
            /* Duration 100ms */
            "duration-100": () => "100ms",
            /* Duration 50ms */
            "duration-50": () => "50ms",

            /* Motion path */
            "path-standard-path": () => "1",
        },
        color: {
            /* Surface tint */
            "surface-tint": () => theme.sys.color.primary(),
            /* Surface tint color */
            "surface-tint-color": () => theme.sys.color.primary(),
            /* On error container */
            "on-error-container": () => theme.ref.palette.error80(),
            /* On error */
            "on-error": () => theme.ref.palette.error20(),
            /* Error container */
            "error-container": () => theme.ref.palette.error30(),
            /* On tertiary container */
            "on-tertiary-container": () => theme.ref.palette.tertiary90(),
            /* On tertiary */
            "on-tertiary": () => theme.ref.palette.tertiary20(),
            /* Tertiary container */
            "tertiary-container": () => theme.ref.palette.tertiary30(),
            /* Tertiary */
            tertiary: () => theme.ref.palette.tertiary80(),
            /* Shadow */
            shadow: () => theme.ref.palette.neutral0(),
            /* Error */
            error: () => theme.ref.palette.error80(),
            /* Outline */
            outline: () => theme.ref.palette["neutral-variant60"](),
            /* Outline Variant */
            "outline-variant": () => theme.ref.palette["neutral-variant30"](),
            /* On background */
            "on-background": () => theme.ref.palette.neutral90(),
            /* Background */
            background: () => theme.ref.palette.neutral10(),
            /* Inverse on surface */
            "inverse-on-surface": () => theme.ref.palette.neutral20(),
            /* Inverse surface */
            "inverse-surface": () => theme.ref.palette.neutral90(),
            /* On surface variant */
            "on-surface-variant": () => theme.ref.palette["neutral-variant80"](),
            /* On surface */
            "on-surface": () => theme.ref.palette.neutral90(),
            /* Surface Variant */
            "surface-variant": () => theme.ref.palette["neutral-variant30"](),
            /* Surface */
            surface: () => theme.ref.palette.neutral10(),
            /* On secondary container */
            "on-secondary-container": () => theme.ref.palette.secondary90(),
            /* On secondary */
            "on-secondary": () => theme.ref.palette.secondary20(),
            /* Secondary container */
            "secondary-container": () => theme.ref.palette.secondary30(),
            /* Secondary */
            secondary: () => theme.ref.palette.secondary80(),
            /* Inverse primary */
            "inverse-primary": () => theme.ref.palette.primary40(),
            /* On primary container */
            "on-primary-container": () => theme.ref.palette.primary90(),
            /* On primary */
            "on-primary": () => theme.ref.palette.primary20(),
            /* Primary container */
            "primary-container": () => theme.ref.palette.primary30(),
            /* Primary */
            primary: () => theme.ref.palette.primary80(),
        },
    },
} as const;

export default theme;

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    // replace dark theme with the light theme

    theme = {
        ...theme,
        sys: {
            ...theme.sys,
            color: {
                ...theme.sys.color,

                "surface-tint": () => theme.sys.color.primary(),
                /* Surface tint color */
                "surface-tint-color": () => theme.sys.color.primary(),
                /* On error container */
                "on-error-container": () => theme.ref.palette.error10(),
                /* On error */
                "on-error": () => theme.ref.palette.error100(),
                /* Error container */
                "error-container": () => theme.ref.palette.error90(),
                /* On tertiary container */
                "on-tertiary-container": () => theme.ref.palette.tertiary10(),
                /* On tertiary */
                "on-tertiary": () => theme.ref.palette.tertiary100(),
                /* Tertiary container */
                "tertiary-container": () => theme.ref.palette.tertiary90(),
                /* Tertiary */
                tertiary: () => theme.ref.palette.tertiary40(),
                /* Shadow */
                shadow: () => theme.ref.palette.neutral0(),
                /* Error */
                error: () => theme.ref.palette.error40(),
                /* Outline */
                outline: () => theme.ref.palette["neutral-variant50"](),
                /* Outline Variant */
                "outline-variant": () => theme.ref.palette["neutral-variant80"](),
                /* On background */
                "on-background": () => theme.ref.palette.neutral10(),
                /* Background */
                background: () => theme.ref.palette.neutral99(),
                /* Inverse on surface */
                "inverse-on-surface": () => theme.ref.palette.neutral95(),
                /* Inverse surface */
                "inverse-surface": () => theme.ref.palette.neutral20(),
                /* On surface variant */
                "on-surface-variant": () => theme.ref.palette["neutral-variant30"](),
                /* On surface */
                "on-surface": () => theme.ref.palette.neutral10(),
                /* Surface Variant */
                "surface-variant": () => theme.ref.palette["neutral-variant90"](),
                /* Surface */
                surface: () => theme.ref.palette.neutral99(),
                /* On secondary container */
                "on-secondary-container": () => theme.ref.palette.secondary10(),
                /* On secondary */
                "on-secondary": () => theme.ref.palette.secondary100(),
                /* Secondary container */
                "secondary-container": () => theme.ref.palette.secondary90(),
                /* Secondary */
                secondary: () => theme.ref.palette.secondary40(),
                /* Inverse primary */
                "inverse-primary": () => theme.ref.palette.primary80(),
                /* On primary container */
                "on-primary-container": () => theme.ref.palette.primary10(),
                /* On primary */
                "on-primary": () => theme.ref.palette.primary100(),
                /* Primary container */
                "primary-container": () => theme.ref.palette.primary90(),
                /* Primary */
                primary: () => theme.ref.palette.primary40(),
            },
        },
    };
}
