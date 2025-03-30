/*
 * Copyright ©2025 @Ewsgit and YourDash contributors.
 * YourDash is licensed under the MIT License. (https://ewsgit.mit-license.org)
 */

export type UKIconType = (typeof UKIcons)[keyof typeof UKIcons] | string;

// Number types are used as the correct string type throws a ts error
//
export const UKIcons = {
  Accessibility: () => import("./icons/accessibility-16.svg"),
  AccessibilityInset: () => import("./icons/accessibility-inset-16.svg"),
  Alert: () => import("./icons/alert-16.svg"),
  AppLauncher: () => import("./icons/app-launcher-16.svg"),
  Apps: () => import("./icons/apps-16.svg"),
  Archive: () => import("./icons/archive-16.svg"),
  ArrowBoth: () => import("./icons/arrow-both-16.svg"),
  ArrowDown: () => import("./icons/arrow-down-16.svg"),
  ArrowLeft: () => import("./icons/arrow-left-16.svg"),
  ArrowRight: () => import("./icons/arrow-right-16.svg"),
  ArrowSwitch: () => import("./icons/arrow-switch-16.svg"),
  ArrowUp: () => import("./icons/arrow-up-16.svg"),
  Beaker: () => import("./icons/beaker-16.svg"),
  Bell: () => import("./icons/bell-16.svg"),
  BellFill: () => import("./icons/bell-fill-16.svg"),
  BellSlash: () => import("./icons/bell-slash-16.svg"),
  Blocked: () => import("./icons/blocked-16.svg"),
  Bold: () => import("./icons/bold-16.svg"),
  Book: () => import("./icons/book-16.svg"),
  Bookmark: () => import("./icons/bookmark-16.svg"),
  BookmarkSlash: () => import("./icons/bookmark-slash-16.svg"),
  Briefcase: () => import("./icons/briefcase-16.svg"),
  Broadcast: () => import("./icons/broadcast-16.svg"),
  Browser: () => import("./icons/browser-16.svg"),
  Bug: () => import("./icons/bug-16.svg"),
  Cache: () => import("./icons/cache-16.svg"),
  Calendar: () => import("./icons/calendar-16.svg"),
  Check: () => import("./icons/check-16.svg"),
  CheckCircle: () => import("./icons/check-circle-16.svg"),
  CheckCircleFill: () => import("./icons/check-circle-fill-16.svg"),
  Checkbox: () => import("./icons/checkbox-16.svg"),
  Checklist: () => import("./icons/checklist-16.svg"),
  ChevronDown: () => import("./icons/chevron-down-16.svg"),
  ChevronLeft: () => import("./icons/chevron-left-16.svg"),
  ChevronRight: () => import("./icons/chevron-right-16.svg"),
  ChevronUp: () => import("./icons/chevron-up-16.svg"),
  Circle: () => import("./icons/circle-16.svg"),
  CircleSlash: () => import("./icons/circle-slash-16.svg"),
  Clock: () => import("./icons/clock-16.svg"),
  Cloud: () => import("./icons/cloud-16.svg"),
  CloudOffline: () => import("./icons/cloud-offline-16.svg"),
  Code: () => import("./icons/code-16.svg"),
  CodeOfConduct: () => import("./icons/code-of-conduct-16.svg"),
  CodeReview: () => import("./icons/code-review-16.svg"),
  CodeSquare: () => import("./icons/code-square-16.svg"),
  CodeScan: () => import("./icons/codescan-16.svg"),
  CodeScanCheckmark: () => import("./icons/codescan-checkmark-16.svg"),
  CodeSpaces: () => import("./icons/codespaces-16.svg"),
  Columns: () => import("./icons/columns-16.svg"),
  CommandPalette: () => import("./icons/command-palette-16.svg"),
  Comment: () => import("./icons/comment-16.svg"),
  CommentDiscussion: () => import("./icons/comment-discussion-16.svg"),
  Container: () => import("./icons/container-16.svg"),
  Copilot: () => import("./icons/copilot-16.svg"),
  Copilot48: () => import("./icons/copilot-48.svg"),
  Copilot96: () => import("./icons/copilot-96.svg"),
  CopilotError: () => import("./icons/copilot-error-16.svg"),
  CopilotWarning: () => import("./icons/copilot-warning-16.svg"),
  Copy: () => import("./icons/copy-16.svg"),
  Cpu: () => import("./icons/cpu-16.svg"),
  CreditCard: () => import("./icons/credit-card-16.svg"),
  CrossReference: () => import("./icons/cross-reference-16.svg"),
  Dash: () => import("./icons/dash-16.svg"),
  Database: () => import("./icons/database-16.svg"),
  Dependabot: () => import("./icons/dependabot-16.svg"),
  DesktopDownload: () => import("./icons/desktop-download-16.svg"),
  DeviceCamera: () => import("./icons/device-camera-16.svg"),
  DeviceCameraVideo: () => import("./icons/device-camera-video-16.svg"),
  DeviceDesktop: () => import("./icons/device-desktop-16.svg"),
  DeviceMobile: () => import("./icons/device-mobile-16.svg"),
  Diamond: () => import("./icons/diamond-16.svg"),
  Diff: () => import("./icons/diff-16.svg"),
  DiffAdded: () => import("./icons/diff-added-16.svg"),
  DiffIgnored: () => import("./icons/diff-ignored-16.svg"),
  DiffModified: () => import("./icons/diff-modified-16.svg"),
  DiffRemoved: () => import("./icons/diff-removed-16.svg"),
  DiffRenamed: () => import("./icons/diff-renamed-16.svg"),
  Dot: () => import("./icons/dot-16.svg"),
  DotFill: () => import("./icons/dot-fill-16.svg"),
  Download: () => import("./icons/download-16.svg"),
  Duplicate: () => import("./icons/duplicate-16.svg"),
  Ellipsis: () => import("./icons/ellipsis-16.svg"),
  Eye: () => import("./icons/eye-16.svg"),
  EyeClosed: () => import("./icons/eye-closed-16.svg"),
  Ewsgit: () => import("./icons/ewsgit.svg"),
  FeedDiscussion: () => import("./icons/feed-discussion-16.svg"),
  FeedForked: () => import("./icons/feed-forked-16.svg"),
  FeedHeart: () => import("./icons/feed-heart-16.svg"),
  FeedMerged: () => import("./icons/feed-merged-16.svg"),
  FeedPerson: () => import("./icons/feed-person-16.svg"),
  FeedRepo: () => import("./icons/feed-repo-16.svg"),
  FeedRocket: () => import("./icons/feed-rocket-16.svg"),
  FeedStar: () => import("./icons/feed-star-16.svg"),
  FeedTag: () => import("./icons/feed-tag-16.svg"),
  FeedTrophy: () => import("./icons/feed-trophy-16.svg"),
  File: () => import("./icons/file-16.svg"),
  FileAdded: () => import("./icons/file-added-16.svg"),
  FileBadge: () => import("./icons/file-badge-16.svg"),
  FileBinary: () => import("./icons/file-binary-16.svg"),
  FileCode: () => import("./icons/file-code-16.svg"),
  FileDiff: () => import("./icons/file-diff-16.svg"),
  FileDirectory: () => import("./icons/file-directory-16.svg"),
  FileDirectoryFill: () => import("./icons/file-directory-fill-16.svg"),
  FileDirectoryOpenFill: () => import("./icons/file-directory-open-fill-16.svg"),
  FileMoved: () => import("./icons/file-moved-16.svg"),
  FileRemoved: () => import("./icons/file-removed-16.svg"),
  FileSubmodule: () => import("./icons/file-submodule-16.svg"),
  FileSymlinkFile: () => import("./icons/file-symlink-file-16.svg"),
  FileZip: () => import("./icons/file-zip-16.svg"),
  Filter: () => import("./icons/filter-16.svg"),
  Flame: () => import("./icons/flame-16.svg"),
  Fold: () => import("./icons/fold-16.svg"),
  FoldDown: () => import("./icons/fold-down-16.svg"),
  FoldUp: () => import("./icons/fold-up-16.svg"),
  Gear: () => import("./icons/gear-16.svg"),
  Gift: () => import("./icons/gift-16.svg"),
  GitBranch: () => import("./icons/git-branch-16.svg"),
  GitCommit: () => import("./icons/git-commit-16.svg"),
  GitCompare: () => import("./icons/git-compare-16.svg"),
  GitMerge: () => import("./icons/git-merge-16.svg"),
  GitMergeQueue: () => import("./icons/git-merge-queue-16.svg"),
  GitPullRequest: () => import("./icons/git-pull-request-16.svg"),
  GitPullRequestClosed: () => import("./icons/git-pull-request-closed-16.svg"),
  GitPullRequestDraft: () => import("./icons/git-pull-request-draft-16.svg"),
  Globe: () => import("./icons/globe-16.svg"),
  Grabber: () => import("./icons/grabber-16.svg"),
  Graph: () => import("./icons/graph-16.svg"),
  Hash: () => import("./icons/hash-16.svg"),
  Heading: () => import("./icons/heading-16.svg"),
  Heart: () => import("./icons/heart-16.svg"),
  HeartFill: () => import("./icons/heart-fill-16.svg"),
  History: () => import("./icons/history-16.svg"),
  Home: () => import("./icons/home-16.svg"),
  HorizontalRule: () => import("./icons/horizontal-rule-16.svg"),
  Hourglass: () => import("./icons/hourglass-16.svg"),
  Hubot: () => import("./icons/hubot-16.svg"),
  IdBadge: () => import("./icons/id-badge-16.svg"),
  Image: () => import("./icons/image-16.svg"),
  Inbox: () => import("./icons/inbox-16.svg"),
  InfinitySymbol: () => import("./icons/infinity-16.svg"),
  Info: () => import("./icons/info-16.svg"),
  IssueClosed: () => import("./icons/issue-closed-16.svg"),
  IssueDraft: () => import("./icons/issue-draft-16.svg"),
  IssueOpened: () => import("./icons/issue-opened-16.svg"),
  IssueReopened: () => import("./icons/issue-reopened-16.svg"),
  Italic: () => import("./icons/italic-16.svg"),
  Iterations: () => import("./icons/iterations-16.svg"),
  KebabHorizontal: () => import("./icons/kebab-horizontal-16.svg"),
  Key: () => import("./icons/key-16.svg"),
  KeyAsterisk: () => import("./icons/key-asterisk-16.svg"),
  Law: () => import("./icons/law-16.svg"),
  LightBulb: () => import("./icons/light-bulb-16.svg"),
  Link: () => import("./icons/link-16.svg"),
  LinkExternal: () => import("./icons/link-external-16.svg"),
  ListOrdered: () => import("./icons/list-ordered-16.svg"),
  ListUnordered: () => import("./icons/list-unordered-16.svg"),
  Location: () => import("./icons/location-16.svg"),
  Lock: () => import("./icons/lock-16.svg"),
  Log: () => import("./icons/log-16.svg"),
  Login: () => import("./icons/login.svg"),
  LogoGist: () => import("./icons/logo-gist-16.svg"),
  LogoGithub: () => import("./icons/logo-github-16.svg"),
  Logout: () => import("./icons/logout.svg"),
  Mail: () => import("./icons/mail-16.svg"),
  MarkGithub: () => import("./icons/mark-github-16.svg"),
  Markdown: () => import("./icons/markdown-16.svg"),
  Megaphone: () => import("./icons/megaphone-16.svg"),
  Mention: () => import("./icons/mention-16.svg"),
  Meter: () => import("./icons/meter-16.svg"),
  Milestone: () => import("./icons/milestone-16.svg"),
  Mirror: () => import("./icons/mirror-16.svg"),
  Moon: () => import("./icons/moon-16.svg"),
  MortarBoard: () => import("./icons/mortar-board-16.svg"),
  MultiSelect: () => import("./icons/multi-select-16.svg"),
  Mute: () => import("./icons/mute-16.svg"),
  NoEntry: () => import("./icons/no-entry-16.svg"),
  NorthStar: () => import("./icons/north-star-16.svg"),
  Note: () => import("./icons/note-16.svg"),
  Number: () => import("./icons/number-16.svg"),
  Organization: () => import("./icons/organization-16.svg"),
  Package: () => import("./icons/package-16.svg"),
  PackageDependencies: () => import("./icons/package-dependencies-16.svg"),
  PackageDependents: () => import("./icons/package-dependents-16.svg"),
  Paintbrush: () => import("./icons/paintbrush-16.svg"),
  PaperAirplane: () => import("./icons/paper-airplane-16.svg"),
  Paperclip: () => import("./icons/paperclip-16.svg"),
  Paste: () => import("./icons/paste-16.svg"),
  Pencil: () => import("./icons/pencil-16.svg"),
  People: () => import("./icons/people-16.svg"),
  Person: () => import("./icons/person-16.svg"),
  PersonAdd: () => import("./icons/person-add-16.svg"),
  PersonFill: () => import("./icons/person-fill-16.svg"),
  Pin: () => import("./icons/pin-16.svg"),
  Play: () => import("./icons/play-16.svg"),
  Plug: () => import("./icons/plug-16.svg"),
  Plus: () => import("./icons/plus-16.svg"),
  PlusCircle: () => import("./icons/plus-circle-16.svg"),
  Project: () => import("./icons/project-16.svg"),
  Pulse: () => import("./icons/pulse-16.svg"),
  Question: () => import("./icons/question-16.svg"),
  Quote: () => import("./icons/quote-16.svg"),
  Reply: () => import("./icons/reply-16.svg"),
  Repo: () => import("./icons/repo-16.svg"),
  RepoClone: () => import("./icons/repo-clone-16.svg"),
  RepoDeleted: () => import("./icons/repo-deleted-16.svg"),
  RepoForked: () => import("./icons/repo-forked-16.svg"),
  RepoLocked: () => import("./icons/repo-locked-16.svg"),
  RepoPull: () => import("./icons/repo-pull-16.svg"),
  RepoPush: () => import("./icons/repo-push-16.svg"),
  RepoTemplate: () => import("./icons/repo-template-16.svg"),
  Report: () => import("./icons/report-16.svg"),
  Rocket: () => import("./icons/rocket-16.svg"),
  Rows: () => import("./icons/rows-16.svg"),
  Rss: () => import("./icons/rss-16.svg"),
  Ruby: () => import("./icons/ruby-16.svg"),
  ScreenFull: () => import("./icons/screen-full-16.svg"),
  ScreenNormal: () => import("./icons/screen-normal-16.svg"),
  Search: () => import("./icons/search-16.svg"),
  Server: () => import("./icons/server-16.svg"),
  ServerError: () => import("./icons/server-error.svg"),
  Share: () => import("./icons/share-16.svg"),
  ShareAndroid: () => import("./icons/share-android-16.svg"),
  Shield: () => import("./icons/shield-16.svg"),
  ShieldCheck: () => import("./icons/shield-check-16.svg"),
  ShieldLock: () => import("./icons/shield-lock-16.svg"),
  ShieldSlash: () => import("./icons/shield-slash-16.svg"),
  ShieldX: () => import("./icons/shield-x-16.svg"),
  SidebarCollapse: () => import("./icons/sidebar-collapse-16.svg"),
  SidebarExpand: () => import("./icons/sidebar-expand-16.svg"),
  SignIn: () => import("./icons/sign-in-16.svg"),
  SignOut: () => import("./icons/sign-out-16.svg"),
  SingleSelect: () => import("./icons/single-select-16.svg"),
  Skip: () => import("./icons/skip-16.svg"),
  Sliders: () => import("./icons/sliders-16.svg"),
  Smiley: () => import("./icons/smiley-16.svg"),
  SortAsc: () => import("./icons/sort-asc-16.svg"),
  SortDesc: () => import("./icons/sort-desc-16.svg"),
  Square: () => import("./icons/square-16.svg"),
  SquareFill: () => import("./icons/square-fill-16.svg"),
  Squirrel: () => import("./icons/squirrel-16.svg"),
  Stack: () => import("./icons/stack-16.svg"),
  Star: () => import("./icons/star-16.svg"),
  StarFill: () => import("./icons/star-fill-16.svg"),
  Stop: () => import("./icons/stop-16.svg"),
  Stopwatch: () => import("./icons/stopwatch-16.svg"),
  Store: () => import("./icons/store.svg"),
  Strikethrough: () => import("./icons/strikethrough-16.svg"),
  Sun: () => import("./icons/sun-16.svg"),
  Sync: () => import("./icons/sync-16.svg"),
  TabExternal: () => import("./icons/tab-external-16.svg"),
  Table: () => import("./icons/table-16.svg"),
  Tag: () => import("./icons/tag-16.svg"),
  TaskList: () => import("./icons/tasklist-16.svg"),
  Telescope: () => import("./icons/telescope-16.svg"),
  TelescopeFill: () => import("./icons/telescope-fill-16.svg"),
  Terminal: () => import("./icons/terminal-16.svg"),
  ThreeBars: () => import("./icons/three-bars-16.svg"),
  ThumbsDown: () => import("./icons/thumbsdown-16.svg"),
  ThumbsUp: () => import("./icons/thumbsup-16.svg"),
  Tools: () => import("./icons/tools-16.svg"),
  Trash: () => import("./icons/trash-16.svg"),
  TriangleDown: () => import("./icons/triangle-down-16.svg"),
  TriangleLeft: () => import("./icons/triangle-left-16.svg"),
  TriangleRight: () => import("./icons/triangle-right-16.svg"),
  TriangleUp: () => import("./icons/triangle-up-16.svg"),
  Trophy: () => import("./icons/trophy-16.svg"),
  Typography: () => import("./icons/typography-16.svg"),
  Unfold: () => import("./icons/unfold-16.svg"),
  Unlock: () => import("./icons/unlock-16.svg"),
  Unmute: () => import("./icons/unmute-16.svg"),
  Unverified: () => import("./icons/unverified-16.svg"),
  Upload: () => import("./icons/upload-16.svg"),
  Verified: () => import("./icons/verified-16.svg"),
  Versions: () => import("./icons/versions-16.svg"),
  Video: () => import("./icons/video-16.svg"),
  Webhook: () => import("./icons/webhook-16.svg"),
  Workflow: () => import("./icons/workflow-16.svg"),
  X: () => import("./icons/x-16.svg"),
  XCircle: () => import("./icons/x-circle-16.svg"),
  XCircleFill: () => import("./icons/x-circle-fill-16.svg"),
  YourDashLogo: () => import("./icons/yourdash.svg"),
  Zap: () => import("./icons/zap-16.svg"),
};
