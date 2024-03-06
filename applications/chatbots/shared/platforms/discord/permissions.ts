/*
 * Copyright ©2024 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

export enum DiscordPermissions {
  // Allows creation of instant invites	T, V, S
  CREATE_INSTANT_INVITE = 0x0000000000000001,
  //	Allows kicking members
  KICK_MEMBERS = 0x0000000000000002,
  //	Allows banning members
  BAN_MEMBERS = 0x0000000000000004,
  //	Allows all permissions and bypasses channel permission overwrites
  ADMINISTRATOR = 0x0000000000000008,
  //	Allows management and editing of channels	T, V, S
  MANAGE_CHANNELS = 0x0000000000000010,
  //	Allows management and editing of the guild
  MANAGE_GUILD = 0x0000000000000020,
  //	Allows for the addition of reactions to messages	T, V, S
  ADD_REACTIONS = 0x0000000000000040,
  //	Allows for viewing of audit logs
  VIEW_AUDIT_LOG = 0x0000000000000080,
  //	Allows for using priority speaker in a voice channel	V
  PRIORITY_SPEAKER = 0x0000000000000100,
  //	Allows the user to go live	V, S
  STREAM = 0x0000000000000200,
  //	Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels	T, V, S
  VIEW_CHANNEL = 0x0000000000000400,
  //	Allows for sending messages in a channel and creating threads in a forum (does not allow, //	T, V, S
  SEND_MESSAGES = 0x0000000000000800,
  //	Allows for sending of /tts messages	T, V, S
  SEND_TTS_MESSAGES = 0x0000000000001000,
  //	Allows for deletion of other users messages	T, V, S
  MANAGE_MESSAGES = 0x0000000000002000,
  //	Links sent by users with this permission will be auto-embedded	T, V, S
  EMBED_LINKS = 0x0000000000004000,
  //	Allows for uploading images and files	T, V, S
  ATTACH_FILES = 0x0000000000008000,
  //	Allows for reading of message history	T, V, S
  READ_MESSAGE_HISTORY = 0x0000000000010000,
  //	Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel	T, V, S
  MENTION_EVERYONE = 0x0000000000020000,
  //	Allows the usage of custom emojis from other servers	T, V, S
  USE_EXTERNAL_EMOJIS = 0x0000000000040000,
  //	Allows for viewing guild insights
  VIEW_GUILD_INSIGHTS = 0x0000000000080000,
  //	Allows for joining of a voice channel	V, S
  CONNECT = 0x0000000000100000,
  //	Allows for speaking in a voice channel	V
  SPEAK = 0x0000000000200000,
  //	Allows for muting members in a voice channel	V, S
  MUTE_MEMBERS = 0x0000000000400000,
  //	Allows for deafening of members in a voice channel	V
  DEAFEN_MEMBERS = 0x0000000000800000,
  //	Allows for moving of members between voice channels	V, S
  MOVE_MEMBERS = 0x0000000001000000,
  //	Allows for using voice-activity-detection in a voice channel	V
  USE_VAD = 0x0000000002000000,
  //	Allows for modification of own nickname
  CHANGE_NICKNAME = 0x0000000004000000,
  //	Allows for modification of other users nicknames
  MANAGE_NICKNAMES = 0x0000000008000000,
  //	Allows management and editing of roles	T, V, S
  MANAGE_ROLES = 0x0000000010000000,
  //	Allows management and editing of webhooks	T, V, S
  MANAGE_WEBHOOKS = 0x0000000020000000,
  //	Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users
  MANAGE_GUILD_EXPRESSIONS = 0x0000000040000000,
  //	Allows members to use application commands, including slash commands and context menu commands.	T, V, S
  USE_APPLICATION_COMMANDS = 0x0000000080000000,
  //	Allows for requesting to speak in stage channels. (This permission is under active development and may be, //	S
  REQUEST_TO_SPEAK = 0x0000000100000000,
  //	Allows for editing and deleting scheduled events created by all users	V, S
  MANAGE_EVENTS = 0x0000000200000000,
  //	Allows for deleting and archiving threads, and viewing all private threads	T
  MANAGE_THREADS = 0x0000000400000000,
  //	Allows for creating public and announcement threads	T
  CREATE_PUBLIC_THREADS = 0x0000000800000000,
  //	Allows for creating private threads	T
  CREATE_PRIVATE_THREADS = 0x0000001000000000,
  //	Allows the usage of custom stickers from other servers	T, V, S
  USE_EXTERNAL_STICKERS = 0x0000002000000000,
  //	Allows for sending messages in threads	T
  SEND_MESSAGES_IN_THREADS = 0x0000004000000000,
  //	Allows for using Activities (applications, // in a voice channel	V
  USE_EMBEDDED_ACTIVITIES = 0x0000008000000000,
  //	Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels
  MODERATE_MEMBERS = 0x0000010000000000,
  //	Allows for viewing role subscription insights
  VIEW_CREATOR_MONETIZATION_ANALYTICS = 0x0000020000000000,
  //	Allows for using soundboard in a voice channel	V
  USE_SOUNDBOARD = 0x0000040000000000,
  //	Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the current user. Not yet available to developers, see changelog.
  CREATE_GUILD_EXPRESSIONS = 0x0000080000000000,
  //	Allows for creating scheduled events, and editing and deleting those created by the current user. Not yet available to developers, see changelog.	V, S
  CREATE_EVENTS = 0x0000100000000000,
  //	Allows the usage of custom soundboard sounds from other servers	V
  USE_EXTERNAL_SOUNDS = 0x0000200000000000,
  //	Allows sending voice messages	T, V, S
  SEND_VOICE_MESSAGES = 0x0000400000000000,
}