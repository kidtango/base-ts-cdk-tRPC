
import { ApiEnv } from "@api/environment"

export type EnvironmentConfig = {
  /** AWS region to deploy to */
  readonly region: string
  /** AWS account to deploy to */
  readonly account: string
  /** AWS profile to deploy with */
  readonly profile: string
}