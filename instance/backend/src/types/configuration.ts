export interface YourDashInstanceConfiguration {
  logQueryParameters: boolean;
  logOptionsRequests: boolean;
  isDevMode: boolean;
  port: number;
  postgresPassword: string;
  postgresHostname: string;
  postgresPort: number;
  postgresUser: string;
  postgresDatabase: string;
  cookieSecret: string;
  loadDevelopmentApplications: string[];
  featureFlags: YourDashFeatureFlags[];
}

export enum YourDashFeatureFlags {
  SlashCommands = "slash_commands",
}
