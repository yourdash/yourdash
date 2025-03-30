/*
 * Copyright ©2025 Ewsgit <https://ewsgit.uk> and YourDash <https://yourdash.ewsgit.uk> contributors.
 * YourDash is licensed under the MIT License. (https://mit.ewsgit.uk)
 */

import { useEffect, useState } from "react";

export default function useResource<
  T extends any,
  TReturn extends keyof T | undefined,
  TransReturn extends TReturn extends keyof T ? T[TReturn] : T,
>(
  resource: () => Promise<T>,
  options?: { dependencies?: unknown[]; return?: TReturn; transform?: (data: TReturn extends keyof T ? T[TReturn] : T) => TransReturn },
): TransReturn | undefined {
  const [data, setData] = useState<TransReturn | undefined>(undefined);

  useEffect(() => {
    setData(undefined);
    resource().then((d) => {
      // @ts-ignore
      let result: TReturn extends keyof T ? T[TReturn] : T = d; // Default to d if no return key.
      if (options?.return && typeof options.return !== "undefined") {
        result = d[options.return] as TReturn extends keyof T ? T[TReturn] : T;
      }
      const transformFunction =
        options?.transform ?? (((data: any) => data) as (data: TReturn extends keyof T ? T[TReturn] : T) => TransReturn);

      setData(transformFunction(result));
    });
  }, options?.dependencies ?? []);

  return data;
}
