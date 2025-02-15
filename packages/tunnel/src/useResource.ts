/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { useEffect, useState } from "react";

type NotUndefined<T> = T extends undefined ? never : T;

export default function useResource<T extends any, TReturn extends keyof T | undefined, TransReturn extends any>(
  resource: () => Promise<T>,
  options?: { dependencies?: unknown[]; return?: TReturn; transform?: (data: TReturn extends keyof T ? T[TReturn] : T) => TransReturn },
): TransReturn extends NotUndefined<TransReturn>
  ? TransReturn | undefined
  : TReturn extends keyof T
    ? T[TReturn] | undefined
    : T | undefined {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    setData(undefined);
    resource().then((d) => {
      if (options?.return) {
        if (options?.transform) {
          // @ts-ignore
          setData(transform(d[options.return]));
        } else {
          // @ts-ignore
          setData(d[options.return]);
        }
      } else {
        if (options?.transform) {
          // @ts-ignore
          setData(transform(d));
        } else {
          // @ts-ignore
          setData(d);
        }
      }
    });
  }, options?.dependencies ?? []);

  // @ts-ignore
  return data;
}
