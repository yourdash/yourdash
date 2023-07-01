import KeyValueDatabase from "./keyValueDatabase.js";
import path from "path";
import YourDashUnreadUser from "./user.js";

const userDatabases: {
  [ username: string ]: KeyValueDatabase
} = {};

export default async function getUserDatabase(username: string) {
  if (userDatabases[username]) {
    return userDatabases[username];
  }

  userDatabases[username] = new KeyValueDatabase();

  const user = new YourDashUnreadUser(username);

  await userDatabases[username].readFromDisk(path.resolve(user.getPath(), "./userdb.json"));

  return userDatabases[username];
}