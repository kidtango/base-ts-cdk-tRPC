
import { z } from "zod";

const ApiEnviSchema = z.object({
  ENVIRONMENT: z.enum(["development", "production", "test"]),
})
export type ApiEnv = z.infer<typeof ApiEnviSchema>;

let env: ApiEnv
export function getEnv() {
  if (!env || process.env.TEST) {
    env = ApiEnviSchema.parse(process.env)
  }

  return ApiEnviSchema.parse(process.env)
}

export function envToObject(env: ApiEnv) {
  return {
    ENVIRONMENT: env.ENVIRONMENT
    // ALLOWED_ORIGINS: JSON.stringify(env.ALLOWED_ORIGINS),
  }
}