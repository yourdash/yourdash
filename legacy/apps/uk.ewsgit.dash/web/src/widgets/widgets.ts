import loadable from "@loadable/component";

const WIDGETS = {
  applicationShortcut: loadable(() => import("./applicationShortcut/index")),
};

export default WIDGETS;
