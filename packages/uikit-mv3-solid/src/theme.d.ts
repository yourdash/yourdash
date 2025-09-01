import "solid-styled-components";
import type { IBaseTheme } from "./core/IBaseTheme.ts";

declare module "solid-styled-components" {
    export interface DefaultTheme extends IBaseTheme {}
}
