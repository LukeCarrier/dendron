export const global: GlobalConfig = {};
export const test: StageConfig = {
  COGNITO_POOL_ID: "TODO",
  COGNITO_CLIENT_ID: "TODO",
  SEGMENT_WEB_KEY: "TODO",
  SEGMENT_VSCODE_KEY: "TODO",
};
export const local: StageConfig = {
  COGNITO_POOL_ID: "TODO",
  COGNITO_CLIENT_ID: "TODO",
  SEGMENT_WEB_KEY: "TODO",
  SEGMENT_VSCODE_KEY: "TODO",
};
export const dev: StageConfig = {
  COGNITO_POOL_ID: "us-west-2_X6icVFghe",
  COGNITO_CLIENT_ID: "19vkp969ss471e424pfh7trq33",
  SEGMENT_WEB_KEY: "K62tHP5N3jhd2i1tUNuSyEpPoJmG1tZo",
  SEGMENT_VSCODE_KEY: "Gh1H6hRdVHRIbnjWtw9DBgoGoBSUdjME",
};
export const prod: StageConfig = {
  COGNITO_POOL_ID: "us-west-2_X6icVFghe",
  COGNITO_CLIENT_ID: "19vkp969ss471e424pfh7trq33",
  SEGMENT_WEB_KEY: "TODO",
  SEGMENT_VSCODE_KEY: "TVO9BpMkMjzJcHaG3nZb5xc9Gm6BGsdB",
};
export const config = { global, test, local, dev, prod };

type GlobalConfig = {
  LOG_LEVEL?: string;
  LOG_NAME?: string;
  LOG_DST?: string;
};

type StageConfig = {
  COGNITO_POOL_ID: string;
  COGNITO_CLIENT_ID: string;
  SEGMENT_WEB_KEY: string;
  SEGMENT_VSCODE_KEY: string;
};
export type ConfigKey = keyof GlobalConfig | keyof StageConfig;
