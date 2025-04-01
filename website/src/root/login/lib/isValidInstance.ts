/*
 * Copyright ©2025 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

enum InstanceStatus {
  // eslint-disable-next-line no-unused-vars
  MAINTENANCE,
  OK,
  INVISIBLE,
  NON_FUNCTIONAL,
  UNKNOWN,
}

export default function isValidInstance(instanceUrl: string): Promise<boolean> {
  const instanceUrlWithoutProtocol = instanceUrl?.split("://")[1];
  const doesContainPort = instanceUrlWithoutProtocol?.split(":")[1] !== undefined;

  return new Promise<boolean>(async (resolve) => {
    if (instanceUrl === "") {
      return resolve(false);
    }

    if (!(instanceUrl.startsWith("http://") || instanceUrl.startsWith("https://"))) {
      return resolve(false);
    }

    fetch(`${instanceUrl}${doesContainPort ? "" : ":3563"}/test`)
      .then((response) => {
        if (response.ok) return response.json();

        resolve(false);
      })
      .then((jsonResponse) => {
        if (jsonResponse.type === "YourDash" && jsonResponse.status === InstanceStatus.OK) {
          resolve(true);
          return;
        }

        resolve(false);
      })
      .catch(() => {
        // if the server does not respond return false
        resolve(false);
      });
  });
}
