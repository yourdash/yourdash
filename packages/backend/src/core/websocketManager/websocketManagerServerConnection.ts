/*
 * Copyright ©2023 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

import { Socket as SocketIoSocket } from "socket.io";
import { IYourDashSession, YOURDASH_SESSION_TYPE } from "shared/core/session.js";
import WebsocketManager from "./websocketManager.js";

export default class WebsocketManagerServerConnection {
  username: string;
  session: IYourDashSession<YOURDASH_SESSION_TYPE.desktop>;
  private socket: SocketIoSocket | undefined;
  private websocketManager: WebsocketManager;
  id: `${string}-${number}` /* `[username]-[sessionId]` */;

  constructor(
    username: string,
    session: IYourDashSession<YOURDASH_SESSION_TYPE.desktop>,
    socket: SocketIoSocket,
    websocketManager: WebsocketManager
  ) {
    this.username = username;
    this.session = session;
    this.socket = socket;
    this.websocketManager = websocketManager;

    return this
  }

  close() {
    this.socket.disconnect()

    this.websocketManager.__internal__removeSocketConnection(this)
  }

  listenFor(path: string, callBack: () => void) {
    this.socket.on(path, callBack);

    return this
  }

  emit(path: string, data: unknown) {
    this.socket.emit(path, data);

    return this
  }

  executeCommand(command: string) {
    this.emit("core:execute_command", command)
  }
}