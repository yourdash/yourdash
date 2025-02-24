/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { useEffect, useState } from "react";
export default function useResource<T extends any, TReturn extends keyof T | undefined, TransReturn = never>(
  resource: () => Promise<T>,
  options?: { dependencies?: unknown[]; return?: TReturn; transform?: (data: TReturn extends keyof T ? T[TReturn] : T) => TransReturn },
): TransReturn extends never ? (TReturn extends keyof T ? T[TReturn] | undefined : T | undefined) : TransReturn | undefined {
  const [data, setData] = useState<
    TransReturn extends never ? (TReturn extends keyof T ? T[TReturn] | undefined : T | undefined) : TransReturn | undefined
    // @ts-ignore
  >(undefined);

  useEffect(() => {
    // @ts-ignore
    setData(undefined);
    resource().then((d) => {
      if (options?.return) {
        if (options?.transform) {
          // @ts-ignore
          setData(options.transform(d[options.return]));
        } else {
          // @ts-ignore
          setData(d[options.return]);
        }
      } else {
        if (options?.transform) {
          // @ts-ignore
          setData(options.transform(d));
        } else {
          // @ts-ignore
          setData(d);
        }
      }
    });
  }, options?.dependencies ?? []);

  return data;
}
