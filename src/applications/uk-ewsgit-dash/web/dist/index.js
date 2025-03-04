import { jsx } from "react/jsx-runtime";
import require$$0 from "react";
var compilerRuntime = { exports: {} };
var reactCompilerRuntime_production = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactCompilerRuntime_production;
function requireReactCompilerRuntime_production() {
  if (hasRequiredReactCompilerRuntime_production) return reactCompilerRuntime_production;
  hasRequiredReactCompilerRuntime_production = 1;
  var ReactSharedInternals = require$$0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  reactCompilerRuntime_production.c = function(size) {
    return ReactSharedInternals.H.useMemoCache(size);
  };
  return reactCompilerRuntime_production;
}
var reactCompilerRuntime_development = {};
/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactCompilerRuntime_development;
function requireReactCompilerRuntime_development() {
  if (hasRequiredReactCompilerRuntime_development) return reactCompilerRuntime_development;
  hasRequiredReactCompilerRuntime_development = 1;
  "production" !== process.env.NODE_ENV && function() {
    var ReactSharedInternals = require$$0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    reactCompilerRuntime_development.c = function(size) {
      var dispatcher = ReactSharedInternals.H;
      null === dispatcher && console.error(
        "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
      );
      return dispatcher.useMemoCache(size);
    };
  }();
  return reactCompilerRuntime_development;
}
var hasRequiredCompilerRuntime;
function requireCompilerRuntime() {
  if (hasRequiredCompilerRuntime) return compilerRuntime.exports;
  hasRequiredCompilerRuntime = 1;
  if (process.env.NODE_ENV === "production") {
    compilerRuntime.exports = requireReactCompilerRuntime_production();
  } else {
    compilerRuntime.exports = requireReactCompilerRuntime_development();
  }
  return compilerRuntime.exports;
}
var compilerRuntimeExports = requireCompilerRuntime();
const Index = () => {
  const $ = compilerRuntimeExports.c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("div", { children: "Hello world from YourDash Application Template" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  Index as default
};
//# sourceMappingURL=index.js.map
