import { ApiEnv } from '@api/environment';

/** The AWS Environment details */
export type EnvironmentConfig = {
  /** AWS region to deploy to */
  readonly region: string;
  /** AWS account to deploy to */
  readonly account: string;
  /** AWS profile to deploy with */
  readonly profile: string;
};

/** The API SDK package details used for publishing */
export type ApiPackageConfig = {
  /** Version of the API that will be used when publishing */
  readonly version: `${number}.${number}.${number}`;
  /** The GitHub repo owner of the API SDK package */
  readonly repoOwner: string;
  /** The GitHub repo name of the API SDK package */
  readonly repoName: string;
};

/** The test variables used for testing the API */
export type TestVariables = {
  /** The API URL to test against when running e2e test */
  readonly api_url: string;
  /** The environment variables to set when running unit test and standing the API up locally */
  readonly env: {
    /** The environment that the API Lambda function is expecting */
    readonly api: ApiEnv;
  };
};

export const ENVIRONMENT: EnvironmentConfig = {
  region: 'us-east-1',
  account: '123',
  profile: 'aws-profile-name',
} as const;

export const API_ENV: ApiEnv = {
  ENVIRONMENT: 'dev',
} as const;

export const API_PACKAGE: ApiPackageConfig = {
  version: '0.0.0',
  repoOwner: 'scott-tang',
  repoName: 'api-name',
} as const;

export const TEST_VARIABLES: TestVariables = {
  api_url: '',
  env: {
    api: {
      ENVIRONMENT: 'dev',
    },
  },
} as const;