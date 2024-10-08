/*
 * Copyright ©2024 Ewsgit<https://github.com/ewsgit> and YourDash<https://github.com/yourdash> contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

export default interface GlobalDBCoreLoginNotice {
  // the login notice message.
  message: string;
  // the author of the login notice message.
  author: string;
  // the timestamp of the login notice message's creation.
  timestamp: number;
  // should the notice be displayed
  displayType: "onLogin" | "notification";
}
